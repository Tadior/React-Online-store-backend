import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserInterface } from './types/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { DeleteUserDto } from './dto/deleteUser.dto';
import * as process from 'process';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
  async createUser(@Body() dto: CreateUserDto): Promise<UserEntity> {
    const newUser = await this.usersRepository.save(dto);
    return newUser;
  }

  async getUserByLogin(login: string) {
    const user = await this.usersRepository.findOne({
      where: { login },
    });
    return user;
  }

  async deleteUser(@Body() dto: DeleteUserDto) {
    const user = await this.getUserByLogin(dto.login);
    return await this.usersRepository.remove(user);
  }
}
