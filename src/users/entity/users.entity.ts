import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  email: string;

  @Column()
  @IsString()
  password: string;

  //   @Column({ nullable: true })
  //   @IsString()
  //   name: string;

  //   @Column({ nullable: true })
  //   @IsNumber()
  //   age: number;
}
