import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UserEntity } from '../users/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  async login(@Body() dto: AuthDto): Promise<UserEntity> {
    return this.authService.login(dto);
  }
  @Post()
  async registration(): Promise<void> {
    return this.authService.registration();
  }
}
