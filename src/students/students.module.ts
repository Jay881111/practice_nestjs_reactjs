import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentsModel } from './entity/students.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StudentsModel])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
