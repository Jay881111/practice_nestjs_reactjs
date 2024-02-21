import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { BasicTokenGuard } from './guard/basic-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register/email')
  async postRegisterEmail(@Body() body: RegisterUserDto) {
    return this.authService.registerWithEmail(body);
  }

  @Post('login/email')
  // @UseGuards(BasicTokenGuard)
  postLoginEmail(
    @Body() body: RegisterUserDto,
    // @Headers('authorization') rawToken: string,
  ) {
    //
    // const token = this.authService.extractTokenFromHeader(rawToken, false);
    // const credentials = this.authService.decodeBasicToken(token);

    return this.authService.loginWithEmail(body);
    // return this.authService.loginUser(credentials);
  }
}
