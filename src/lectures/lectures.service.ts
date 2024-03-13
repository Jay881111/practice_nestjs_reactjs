import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturesModel } from './entity/lectures.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LecturesService {
  constructor(
    @InjectRepository(LecturesModel)
    private readonly LecturesRepository: Repository<LecturesModel>,
  ) {}
  async makeLecture(title: string, author: string) {
    const lecture = this.LecturesRepository.create({ title, author });
    console.log('lecture:', lecture);
    const newLecture = await this.LecturesRepository.save(lecture);
    console.log(newLecture);
    return newLecture;
  }
  findLectures() {
    return this.LecturesRepository.find({});
  }
}
