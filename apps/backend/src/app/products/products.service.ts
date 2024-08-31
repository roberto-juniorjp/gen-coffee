import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createProductDto: Prisma.ProductCreateInput) {
    if (!createProductDto.name || createProductDto.price === undefined || !createProductDto.category) {
      throw new BadRequestException('Name, price, and category are required');
    }

    return this.databaseService.product.create({ data: createProductDto });
  }

  async findAll(category?: string) {
    if (category) {
      return this.databaseService.product.findMany({
        where: {
          category: {
            name: category,
          },
        },
      });
    }
    return this.databaseService.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.databaseService.product.findUnique({ where: { id } });
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    return product;
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    const product = await this.databaseService.product.findUnique({ where: { id } });
    if (!product) {
      throw new BadRequestException('Product not found');
    }

    return this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    const product = await this.databaseService.product.findUnique({ where: { id } });
    if (!product) {
      throw new BadRequestException('Product not found');
    }

    return this.databaseService.product.delete({ where: { id } });
  }
}
