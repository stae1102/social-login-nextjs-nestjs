import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { FirebaseService } from 'src/modules/config/firebase/firebase.service';

@Injectable()
export class SignupGuard implements CanActivate {
  constructor(private readonly firebaseService: FirebaseService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getResponse();

    const { idToken } = request.body;

    if (idToken) {
      try {
        const decodedToken = await this.firebaseService.verifyIdToken(idToken);
        request.user = decodedToken;

        return decodedToken ? true : false;
      } catch (error) {
        throw new UnauthorizedException('Firebase token error: ', error);
      }
    }
  }
}
