import { Body, Controller, Get, Post } from '@nestjs/common';
import { LecturesService } from './lectures.service';

@Controller('lectures')
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Post('create')
  createLectures(
    // @Body('id') id: number,
    @Body('title') title: string,
    @Body('author') author: string,
  ) {
    return this.lecturesService.makeLecture(title, author);
  }
  @Get('all')
  findAll() {
    return this.lecturesService.findLectures();
  }
}
