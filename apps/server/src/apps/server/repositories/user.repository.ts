import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/database/prisma/prisma.service';
import { user } from '@prisma/client';
import { CreateUserParam } from './user.type';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findUserByUid(uid: string): Promise<user> {
    return this.prisma.user.findFirst({
      where: {
        uid,
      },
    });
  }

  createUser(createUserParams: CreateUserParam) {
    return this.prisma.user.create({
      data: {
        ...createUserParams,
      },
    });
  }
}
