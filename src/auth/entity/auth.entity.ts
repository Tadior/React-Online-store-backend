import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthInterface } from '../types/auth.interface';
@Entity()
export class AuthEntity implements AuthInterface {
  @PrimaryGeneratedColumn()
  login: string;
  @Column()
  password: string;
}
