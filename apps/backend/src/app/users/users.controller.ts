import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({
    description: 'Create a new user',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string', enum: ['CUSTOMER', 'STAFF', 'ADMIN'] },
      },
    },
  })
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    description: 'Update an existing user',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', nullable: true },
        email: { type: 'string', nullable: true },
        password: { type: 'string', nullable: true },
        role: { type: 'string', enum: ['CUSTOMER', 'STAFF', 'ADMIN'], nullable: true },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
