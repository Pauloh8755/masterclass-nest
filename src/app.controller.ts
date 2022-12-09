import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { PrismaService } from './database/prisma.service';
import { CreateMemberBody } from './dtos/create-member-body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Post('member')
  async createMember(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return { member };
  }
}
