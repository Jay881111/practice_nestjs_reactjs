import { UsersModel } from 'src/users/entity/users.entity';
declare const RegisterUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<UsersModel, "id" | "email" | "password">>;
export declare class RegisterUserDto extends RegisterUserDto_base {
}
export {};
