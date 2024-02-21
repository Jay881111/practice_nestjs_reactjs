import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Role {
  NURSE = 'nurse',
  ADMIN = 'admin',
}

@Entity()
export class StudentsModel {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNumber()
  age: number;

  @Column({ default: 0 })
  @IsNumber()
  // 과정진행율
  process: number;

  @Column({
    // 수강생의 직위, 간호사 Or 관리직
    type: 'enum',
    enum: Role,
    default: Role.NURSE,
  })
  role: Role;
}
