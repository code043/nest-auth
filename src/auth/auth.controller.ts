import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUp: SignUpDto) {
    return this.authService.signUp(signUp);
  }
  @Post('login')
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
