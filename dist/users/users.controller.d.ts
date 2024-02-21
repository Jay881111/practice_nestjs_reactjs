import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUpUser(id: number, userId: string, password: string): Promise<import("./entity/users.entity").UsersModel>;
    findUsers(): Promise<import("./entity/users.entity").UsersModel[]>;
}
