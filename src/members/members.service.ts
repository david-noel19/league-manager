import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersService {
  createMember(member) {
    console.log(`This is the member ${member}`);
  }
}
