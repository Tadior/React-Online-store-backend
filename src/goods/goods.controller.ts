import { Controller, Get, Post } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsInterface } from './types/goods.interface';
import { Goods } from './entity/goods.entity';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}
  @Get()
  async findAllGoods(): Promise<Goods[]> {
    return this.goodsService.findAll();
  }
  @Post()
  async addGoods(): Promise<void> {
    return this.goodsService.addGoods();
  }
}
