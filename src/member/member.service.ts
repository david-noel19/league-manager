import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
  createMember(member) {
    return `This is the member: ${member}`;
  }
  getMember(id) {
    return `This is the member id: ${id}`;
  }
  getFreeAgents(params) {
    return `This will return the free agents: ${params}`;
  }
  patchMember(id) {
    return `This is supposed to patch member id: ${id}`;
  }
  patchMemberStatus(id) {
    return `This is supposed to patch member status for id: ${id}`;
  }
  deleteMember(id) {
    return `This is supposed to delete member id: ${id}`;
  }
}
