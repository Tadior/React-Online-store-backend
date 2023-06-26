import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { AuthEntity } from './entity/auth.entity';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { UserEntity } from '../users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import process from 'process';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(@Body() dto: AuthDto): Promise<UserEntity> {
    const user = await this.userService.getUserByLogin(dto.login);
    return user;
  }
  async registration(@Body() dto: AuthDto) {
    const user = await this.userService.getUserByLogin(dto.login);
    if (user) {
      throw new HttpException(
        'User with such email is already existed',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (process.env.PASSWORD_SALT) {
      throw new HttpException(
        'Enter PASSWORD_SALT into .env file',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(
      dto.password,
      process.env.PASSWORD_SALT,
    );
    const newUserBody = { ...user, password: hashPassword };
    const newUser = await this.userService.createUser(newUserBody);
    return this.generateToken(newUser);
  }

  async generateToken(user: UserEntity) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
