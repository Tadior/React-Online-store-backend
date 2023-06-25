import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  // @Column()
  // image: string[];
  @Column()
  type: string;
  @Column()
  description: string;
  @Column()
  amount: number;
}
