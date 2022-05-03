import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createMemberDto } from './create-member.dto';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}
  @Post()
  createMember(@Body() member: createMemberDto) {
    this.memberService.createMember(member);
  }
  @Get('/:id')
  getMember(@Query('id') id: string) {
    this.memberService.getMember(id);
  }
  @Get('/free-agent')
  getFreeAgents(@Param() params: string) {
    this.memberService.getFreeAgents(params);
  }
  @Patch('/:id')
  patchMember(@Query('id') id: string) {
    this.memberService.patchMember(id);
  }
  @Patch('/:id/status')
  patchMemberStatus(@Query('id') id: string) {
    this.memberService.patchMemberStatus(id);
  }
}
