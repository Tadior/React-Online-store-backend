import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { GoodsService } from '../goods/goods.service';
import { Goods } from '../goods/entity/goods.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserInterface } from './types/user.interface';
import { UserEntity } from './entity/user.entity';
import { DeleteUserDto } from './dto/deleteUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async findAllUsers(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(dto);
  }

  @Delete()
  async deleteUser(@Body() dto: DeleteUserDto): Promise<UserEntity> {
    return this.usersService.deleteUser(dto);
  }
}
