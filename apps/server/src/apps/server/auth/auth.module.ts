import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SignupGuard } from '../guards/signup.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: SignupGuard }],
})
export class AuthModule {}
