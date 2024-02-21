import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signUp')
  signUpUser(
    @Body('id') id: number,
    @Body('userId') userId: string,
    @Body('password') password: string,
  ) {
    return this.usersService.signUp(id, userId, password);
  }

  @Get()
  findUsers() {
    return this.usersService.findUser();
  }
}