import { Injectable } from '@nestjs/common';
import { UsersModel } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  async signUp(id: number, email: string, password: string) {
    const user = this.usersRepository.create({ id, email, password });
    console.log(user);
    const newUser = await this.usersRepository.save(user);
    return newUser;
  }

  findUser() {
    return this.usersRepository.find();
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
