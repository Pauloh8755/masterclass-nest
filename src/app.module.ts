import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MemberRepository } from './repositories/members-repository';
import { PrismaMemberRepository } from './repositories/prisma/prisma-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MemberRepository,
      useClass: PrismaMemberRepository,
    },
  ],
})
export class AppModule {}
