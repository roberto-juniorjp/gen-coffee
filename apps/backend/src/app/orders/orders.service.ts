import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createOrderDto: Prisma.OrderCreateInput) {
    return this.databaseService.order.create({ data: createOrderDto });
  }

  async findAll() {
    return this.databaseService.order.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.order.findUnique({ where: { id } });
  }

  async update(id: number, updateOrderDto: Prisma.OrderUpdateInput) {
    return this.databaseService.order.update({
      where: { id },
      data: updateOrderDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.order.delete({ where: { id } });
  }
}
