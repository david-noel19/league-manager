import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
  createMember(member) {
    console.log(`This is the member: ${member}`);
  }
  getMember(id) {
    console.log(`This is the member id: ${id}`);
  }
  getFreeAgents(params) {
    console.log(`This will return the free agents: ${params}`);
  }
  patchMember(id) {
    console.log(`This is supposed to patch member id: ${id}`);
  }
  patchMemberStatus(id) {
    console.log(`This is supposed to patch member status for id: ${id}`);
  }
}
