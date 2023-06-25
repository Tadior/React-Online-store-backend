import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  mail: string;
  @Column()
  password: string;
  @Column()
  cart: string;
  @Column()
  wishlist: string;
}
