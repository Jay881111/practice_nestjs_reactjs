import { UsersModel } from './entity/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersModel>);
    signUp(id: number, email: string, password: string): Promise<UsersModel>;
    findUser(): Promise<UsersModel[]>;
    getUserByEmail(email: string): Promise<UsersModel>;
}
