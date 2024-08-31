import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiBody({
    description: 'Create a new product',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string', nullable: true },
        price: { type: 'number' },
        categoryId: { type: 'number' },
        isAvailable: { type: 'boolean' },
      },
    },
  })
  create(@Body() createProductDto: Prisma.ProductCreateInput) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiQuery({
    name: 'category',
    required: false,
    description: 'Filter products by category',
    type: String,
  })
  findAll(@Query('category') category?: string) {
    return this.productsService.findAll(category);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    description: 'Update a product',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', nullable: true },
        description: { type: 'string', nullable: true },
        price: { type: 'number', nullable: true },
        categoryId: { type: 'number', nullable: true },
        isAvailable: { type: 'boolean', nullable: true },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ProductUpdateInput) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
