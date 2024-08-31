import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    if (!createCategoryDto.name) {
      throw new BadRequestException('Category name is required');
    }

    return this.databaseService.category.create({ data: createCategoryDto });
  }

  async findAll() {
    return this.databaseService.category.findMany();
  }

  async findOne(id: number) {
    const category = await this.databaseService.category.findUnique({ where: { id } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    const category = await this.databaseService.category.findUnique({ where: { id } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }

    return this.databaseService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    const category = await this.databaseService.category.findUnique({ where: { id } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }

    return this.databaseService.category.delete({ where: { id } });
  }
}
