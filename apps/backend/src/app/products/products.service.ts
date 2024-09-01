import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: CreateProductDto) {
    this.validateProductDto(createProductDto);
    return this.databaseService.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description || null,
        price: createProductDto.price,
        isAvailable: createProductDto.isAvailable ?? true,
        category: {
          connect: { id: createProductDto.categoryId },
        },
      },
    });
  }

  async findAll(category?: string) {
    const where = category ? { category: { name: category } } : {};
    return this.databaseService.product.findMany({ where });
  }

  async findOne(id: number) {
    const product = await this.databaseService.product.findUnique({ where: { id } });
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.checkIfProductExists(id);
    return this.databaseService.product.update({
      where: { id },
      data: {
        name: updateProductDto.name,
        description: updateProductDto.description || null,
        price: updateProductDto.price ?? undefined,
        isAvailable: updateProductDto.isAvailable ?? undefined,
        category: updateProductDto.categoryId ? { connect: { id: updateProductDto.categoryId } } : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.checkIfProductExists(id);
    return this.databaseService.product.delete({ where: { id } });
  }

  private validateProductDto(dto: CreateProductDto) {
    if (!dto.name || dto.price === undefined || !dto.categoryId) {
      throw new BadRequestException('Name, price, and categoryId are required');
    }
  }

  private async checkIfProductExists(id: number) {
    const productExists = await this.databaseService.product.findUnique({ where: { id } });
    if (!productExists) {
      throw new NotFoundException('Product not found');
    }
  }
}