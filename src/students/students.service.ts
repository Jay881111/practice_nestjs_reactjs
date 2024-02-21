import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsModel } from './entity/students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentsModel)
    private readonly studentsRepository: Repository<StudentsModel>,
  ) {}
  async getAllStudents() {
    return this.studentsRepository.find();
  }

  async getOneStudent(id: number) {
    return this.studentsRepository.findOne({ where: { id } });
  }

  async addStudent(name: string, age: number, process: number) {
    return this.studentsRepository.save({ name, age, process });
  }
}
