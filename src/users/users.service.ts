import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersModel } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  async signUp(id: string, email: string, password: string) {
    const user = this.usersRepository.create({ id, email, password });
    console.log('signup', user);
    const newUser = await this.usersRepository.save(user);
    return newUser;
  }

  async createUser(user: Pick<UsersModel, 'email' | 'password'>) {
    const emailExist = await this.usersRepository.exists({
      where: { email: user.email },
    });
    if (emailExist) {
      throw new BadRequestException('이미 가입한 이메일입니다');
    }
    const userObject = this.usersRepository.create({
      email: user.email,
      password: user.password,
    });
    const newUser = await this.usersRepository.save(userObject);
    return newUser;
  }

  findUser() {
    return this.usersRepository.find();
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
