import { ConflictException, Injectable } from '@nestjs/common';
import { ReqFirebaseUser } from '../types/request-firebase-user.type';
import { UserRepository } from '../repositories/user.repository';
import { Provider } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signup(firebaseUser: ReqFirebaseUser) {
    const { uid, firebaseId } = firebaseUser;

    const exUser = await this.userRepository.findUserByUid(uid);
    if (exUser) {
      throw new ConflictException();
    }

    await this.userRepository.createUser({
      nickname: 'test',
      email: 'test@test.com',
      provider: Provider.GOOGLE,
      fcmToken: 'test',
      uid,
      firebaseId,
    });
  }
}
