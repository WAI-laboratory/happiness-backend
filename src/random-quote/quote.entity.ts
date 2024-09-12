import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  content: string;

  @Column()
  @IsNotEmpty()
  author: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  link: string;
}
