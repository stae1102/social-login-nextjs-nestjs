import { Injectable } from '@nestjs/common';
import { ReqFirebaseUser } from '../types/request-firebase-user.type';

@Injectable()
export class AuthService {
  signup(user: ReqFirebaseUser) {}
}
