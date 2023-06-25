import { Injectable } from '@nestjs/common';
import { GoodsInterface } from './types/goods.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './entity/goods.entity';
import { Column, PrimaryGeneratedColumn, Repository } from 'typeorm';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private goodsRepository: Repository<Goods>,
  ) {}

  // private readonly goods: GoodsInterface[] = [
  //   {
  //     id: 1,
  //     name: 'string',
  //     image: ['red'],
  //     type: 'string',
  //     description: 'string',
  //     amount: 5,
  //   },
  // ];

  findAll(): Promise<Goods[]> {
    return this.goodsRepository.find();
  }
  async addGoods() {
    await this.goodsRepository.save({
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
