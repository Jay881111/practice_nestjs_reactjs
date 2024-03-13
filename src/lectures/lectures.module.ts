import { Module } from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { LecturesController } from './lectures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturesModel } from './entity/lectures.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [TypeOrmModule.forFeature([LecturesModel]), CommonModule],
  exports: [LecturesService],
  controllers: [LecturesController],
  providers: [LecturesService],
})
export class LecturesModule {}
