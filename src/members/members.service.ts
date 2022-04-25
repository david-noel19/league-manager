import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersService {
  createMember(member: string) {
    console.log(`This is the member ${member}`);
  }
}
