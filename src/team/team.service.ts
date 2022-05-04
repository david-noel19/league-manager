import { Injectable } from '@nestjs/common';
import { stats } from './stats.type';

@Injectable()
export class TeamService {
  createTeam(team) {
    return `This is supposed to create the team: ${JSON.stringify(team)}`;
  }
  getTeam(id) {
    return `This should get the team with id: ${id}`;
  }
  getTeamMatches(id) {
    return `This should return the matches for team with id: ${id}`;
  }
  getTeamMembers(id) {
    return `This should return an array of all members of the team with id: ${id}`;
  }
  getTeamStats(id) {
    return `This should return a JSON of type response for team id: ${id}`;
  }
  patchTeam(id) {
    return `This should return the response to updating the team with id: ${id}`;
  }
}
