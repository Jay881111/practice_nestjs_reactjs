import { PickType } from '@nestjs/mapped-types';
import { LecturesModel } from '../entity/lectures.entity';

export class RegisterLectureDto extends PickType(LecturesModel, [
  'id',
  'author',
  'title',
]) {}
