import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupGuard } from '../guards/signup.guard';
import { RequestUser } from '../decorators/request-user.decorator';
import { ReqFirebaseUser } from '../types/request-firebase-user.type';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UseGuards(SignupGuard)
  signup(@RequestUser() user: ReqFirebaseUser) {
    this.authService.signup(user);
  }
}
