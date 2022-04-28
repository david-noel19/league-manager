import { Body, Controller, Post } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { createMemberDto } from './create-member.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService) {}
  @Post()
  createMember(@Body() member: createMemberDto) {
    this.membersService.createMember(member);
  }
}
