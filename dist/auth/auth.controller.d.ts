import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postRegisterEmail(body: RegisterUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    postLoginEmail(body: RegisterUserDto, rawToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
