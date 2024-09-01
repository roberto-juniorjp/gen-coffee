import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    if (!createCategoryDto.name) {
      throw new BadRequestException('Category name is required');
    }

    return this.databaseService.category.create({
      data: createCategoryDto,
    });
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

async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.databaseService.category.findUnique({ where: { id } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return this.databaseService.category.update({
      where: { id },
      data: { name: updateCategoryDto.name },
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