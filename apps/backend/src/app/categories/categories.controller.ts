import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiBody({
    description: 'Create a new category',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
    },
  })
  create(@Body() createCategoryDto: Prisma.CategoryCreateInput) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    description: 'Update a category',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', nullable: true },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: Prisma.CategoryUpdateInput
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
