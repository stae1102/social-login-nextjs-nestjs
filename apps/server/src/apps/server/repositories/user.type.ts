import { Provider } from '@prisma/client';

export class CreateUserParam {
  nickname: string;
  email: string;
  provider: Provider;
  fcmToken: string;
  uid: string;
  firebaseId: any;
}
