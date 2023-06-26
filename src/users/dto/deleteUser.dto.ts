import { UserInterface } from '../types/user.interface';
import { IsNotEmpty } from 'class-validator';

export class DeleteUserDto implements Pick<UserInterface, 'login'> {
  @IsNotEmpty()
  login: string;
}
