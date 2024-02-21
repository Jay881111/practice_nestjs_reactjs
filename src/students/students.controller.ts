import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async getStudents() {
    const students = await this.studentsService.getAllStudents();
    if (!students) {
      throw new NotFoundException();
    } else return students;
  }

  @Get(':id')
  async getOneStudent(@Param('id') id: number) {
    const student = await this.studentsService.getOneStudent(id);
    if (!student) {
      throw new NotFoundException('학생이 존재하지 않습니다');
    } else {
      return student;
    }
  }

  @Post()
  addStudent(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('process') process: number,
  ) {
    return this.studentsService.addStudent(name, age, process);
  }
}
