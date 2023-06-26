import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Goods } from './goods/entity/goods.entity';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entity/user.entity';
import { AuthEntity } from './auth/entity/auth.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Goods, UserEntity, AuthEntity],
      synchronize: true,
    }),
    AuthModule,
    GoodsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
