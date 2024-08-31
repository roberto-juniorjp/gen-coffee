import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({
    description: 'Create a new order',
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'number' },
        tableNumber: { type: 'number' },
        status: { type: 'string', enum: ['PENDING', 'PREPARING', 'READY', 'DELIVERED', 'CANCELED'] },
        items: { 
          type: 'array',
          items: { 
            type: 'object',
            properties: {
              productId: { type: 'number' },
              quantity: { type: 'number' },
            },
          },
        },
      },
    },
  })
  create(@Body() createOrderDto: Prisma.OrderCreateInput) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a order by ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a order by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    description: 'Update an existing order',
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'number', nullable: true },
        tableNumber: { type: 'number', nullable: true },
        status: { type: 'string', enum: ['PENDING', 'PREPARING', 'READY', 'DELIVERED', 'CANCELED'], nullable: true },
        items: { 
          type: 'array',
          items: { 
            type: 'object',
            properties: {
              productId: { type: 'number' },
              quantity: { type: 'number' },
            },
          },
          nullable: true,
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateOrderDto: Prisma.OrderUpdateInput) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a order by ID' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
