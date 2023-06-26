import { UserInterface } from '../types/user.interface';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

type exclude = 'id' | 'cart' | 'wishlist';

export class CreateUserDto implements Omit<UserInterface, exclude> {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  @MinLength(10)
  password: string;
}
