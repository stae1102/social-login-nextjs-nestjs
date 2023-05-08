import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { PrismaService } from '../../modules/database/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();