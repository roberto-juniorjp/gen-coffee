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
import { OrderItemsService } from './order-items.service';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';

@ApiTags('Order Items')
@Controller('order-items')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
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
  @ApiOperation({ summary: 'Get all order itens' })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a order item by ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a order item by ID' })
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
  @ApiOperation({ summary: 'Delete a order item by ID' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}