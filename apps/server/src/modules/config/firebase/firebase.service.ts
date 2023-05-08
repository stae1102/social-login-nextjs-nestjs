import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
  constructor(private readonly configService: ConfigService) {}
  private readonly firebaseConfig = {
    apiKey: this.configService.get('FIREBASE_API_KEY'),
    projectId: this.configService.get('FIREBASE_PROJECT_ID'),
    clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
  };

  async verifyIdToken(idToken: string) {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    console.log(decodedToken);

    const uid = decodedToken.uid;
    const firebaseId = decodedToken.firebase.identities.email[0];

    return { uid, firebaseId };
  }
}
