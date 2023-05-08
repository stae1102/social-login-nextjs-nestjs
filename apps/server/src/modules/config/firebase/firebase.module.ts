import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { initializeApp } from 'firebase-admin/app';

@Module({
  imports: [ConfigModule],
  providers: [],
  exports: [],
})
export class FirebaseModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const firebaseConfig = {
      apiKey: this.configService.get('FIREBASE_API_KEY'),
      projectId: this.configService.get('FIREBASE_PROJECT_ID'),
      clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
    };
    initializeApp(firebaseConfig);
  }
}
