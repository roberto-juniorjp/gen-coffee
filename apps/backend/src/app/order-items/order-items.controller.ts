import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiBody({
    description: 'Create a new order item',
    schema: {
      type: 'object',
      properties: {
        quantity: { type: 'number' },
        productId: { type: 'number' },
        orderId: { type: 'number' },
      },
    },
  })
  create(@Body() createOrderItemDto: Prisma.OrderItemCreateInput) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    description: 'Update an existing order item',
    schema: {
      type: 'object',
      properties: {
        quantity: { type: 'number', nullable: true },
        productId: { type: 'number', nullable: true },
        orderId: { type: 'number', nullable: true },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: Prisma.OrderItemUpdateInput
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}