import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {}

  private hasItems(items: Prisma.OrderItemCreateNestedManyWithoutOrderInput | undefined): boolean {
    if (!items || !Array.isArray(items)) {
      return false;
    }
    return items.length > 0;
  }
  async create(createOrderDto: Prisma.OrderCreateInput) {
    if (!createOrderDto.user || !this.hasItems(createOrderDto.items)) {
      throw new BadRequestException('Order must have a user and at least one item');
    }

    return this.databaseService.order.create({ data: createOrderDto });
  }

  async findAll() {
    return this.databaseService.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.databaseService.order.findUnique({ where: { id } });
    if (!order) {
      throw new BadRequestException('Order not found');
    }
    return order;
  }

  async update(id: number, updateOrderDto: Prisma.OrderUpdateInput) {
    const order = await this.databaseService.order.findUnique({ where: { id } });
    if (!order) {
      throw new BadRequestException('Order not found');
    }

    return this.databaseService.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  async remove(id: number) {
    const order = await this.databaseService.order.findUnique({ where: { id } });
    if (!order) {
      throw new BadRequestException('Order not found');
    }

    return this.databaseService.order.delete({ where: { id } });
  }
}
