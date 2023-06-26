import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from '../types/user.interface';

@Entity()
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column('int', { array: true, default: [] })
  cart: string[];
  @Column('int', { array: true, default: [] })
  wishlist: string[];
}
