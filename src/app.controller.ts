import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { PrismaService } from './database/prisma.service';
import { CreateMemberBody } from './dtos/create-member-body';
import { MemberRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(private memberRepository: MemberRepository) {}
  @Post('member')
  async createMember(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body;

    await this.memberRepository.create(name, memberFunction);
    // const member = await this.prisma.user.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: memberFunction,
    //   },
    // });

    // return { member };
  }
}
