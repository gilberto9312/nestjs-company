import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signIn(@Body('email') email: string, @Body('password') password: string) {
    const { token } = await this.authService.signIn(email, password);
    if (!token) {
      return { message: 'Invalid credentials' };
    }
    return { message: 'Sign in successful', token };
  }
}