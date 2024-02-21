import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModel } from 'src/users/entity/users.entity';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    extractTokenFromHeader(header: string, isBearer: boolean): string;
    decodeBasicToken(base64String: string): {
        email: string;
        password: string;
    };
    authenticateWithEmailAndPassword(user: Pick<UsersModel, 'email' | 'password'>): Promise<UsersModel>;
    signToken(user: Pick<UsersModel, 'email' | 'id'>, isRefreshToken: boolean): string;
    loginWithEmail(user: Pick<UsersModel, 'email' | 'password'>): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    loginUser(user: Pick<UsersModel, 'email' | 'id'>): {
        accessToken: string;
        refreshToken: string;
    };
    registerWithEmail(user: RegisterUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
