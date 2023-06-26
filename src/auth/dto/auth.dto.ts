import { AuthInterface } from '../types/auth.interface';
import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthDto implements AuthInterface {
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  @MinLength(10)
  password: string;
}
