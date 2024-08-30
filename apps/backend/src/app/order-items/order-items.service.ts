import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrderItemsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createOrderItemDto: Prisma.OrderItemCreateInput) {
    return this.databaseService.orderItem.create({ data: createOrderItemDto });
  }

  async findAll() {
    return this.databaseService.orderItem.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.orderItem.findUnique({ where: { id } });
  }

  async update(id: number, updateOrderItemDto: Prisma.OrderItemUpdateInput) {
    return this.databaseService.orderItem.update({
      where: { id },
      data: updateOrderItemDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.orderItem.delete({ where: { id } });
  }
}
