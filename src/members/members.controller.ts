import { Controller, Post } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  @Post()
  createMember(member): string {
    MembersService.createMember(member);
  }
}
