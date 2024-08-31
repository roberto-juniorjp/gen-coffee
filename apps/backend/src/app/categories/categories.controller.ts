import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';

@ApiTags('Categories')
@Controller('categories')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
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
  @ApiOperation({ summary: 'Get all categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a category by ID' })
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
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
