import { Controller, Get, Post } from '@nestjs/common';
import { GoodsService } from '../goods/goods.service';
import { Goods } from '../goods/entity/goods.entity';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Post()
  async addUser(): Promise<void> {
    return this.usersService.addUser();
  }
}
