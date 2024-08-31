import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: Prisma.UserCreateInput) {
    if (!createUserDto.email || !createUserDto.password || !createUserDto.name) {
      throw new BadRequestException('Name, email, and password are required');
    }

    const existingUser = await this.databaseService.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('Email is already in use');
    }

    return this.databaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.databaseService.user.findUnique({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    const user = await this.databaseService.user.findUnique({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    const user = await this.databaseService.user.findUnique({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.databaseService.user.delete({ where: { id } });
  }
}
