import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrderItemsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createOrderItemDto: Prisma.OrderItemCreateInput) {
    const { product, order } = createOrderItemDto;

    // Verificar se os IDs de produto e pedido estão presentes
    if (!product?.connect?.id || !order?.connect?.id) {
      throw new BadRequestException('Both productId and orderId are required');
    }

    return this.databaseService.orderItem.create({ data: createOrderItemDto });
  }

  async findAll() {
    return this.databaseService.orderItem.findMany();
  }

  async findOne(id: number) {
    const orderItem = await this.databaseService.orderItem.findUnique({ where: { id } });
    if (!orderItem) {
      throw new BadRequestException('OrderItem not found');
    }
    return orderItem;
  }

  async update(id: number, updateOrderItemDto: Prisma.OrderItemUpdateInput) {
    const orderItem = await this.databaseService.orderItem.findUnique({ where: { id } });
    if (!orderItem) {
      throw new BadRequestException('OrderItem not found');
    }

    return this.databaseService.orderItem.update({
      where: { id },
      data: updateOrderItemDto,
    });
  }

  async remove(id: number) {
    const orderItem = await this.databaseService.orderItem.findUnique({ where: { id } });
    if (!orderItem) {
      throw new BadRequestException('OrderItem not found');
    }

    return this.databaseService.orderItem.delete({ where: { id } });
  }
}
