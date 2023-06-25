import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  async addUser() {
    await this.usersRepository.save({
      id: 1,
      name: 'string',
      // @Column()
      // image: string[];
      type: 'string',
      description: 'string',
      amount: 5,
    });
  }
}
