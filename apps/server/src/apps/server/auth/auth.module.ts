import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SignupGuard } from '../guards/signup.guard';

@Module({
  imports: [],
  providers: [{ provide: APP_GUARD, useClass: SignupGuard }],
})
export class AuthModule {}
