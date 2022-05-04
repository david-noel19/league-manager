import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { createTeamDto } from './create-team.dto';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}
  @Post()
  createTeam(@Body() team: createTeamDto) {
    this.teamService.createTeam(team);
  }
  @Get('/:id')
  getTeam(@Query(':id') id: string) {
    this.teamService.getTeam(id);
  }
  @Get('/:id/matches')
  getTeamMatches(@Query(':id') id: string) {
    this.teamService.getTeamMatches(id);
  }
  @Get('/:id/member')
  getTeamMembers(@Query(':id') id: string) {
    this.teamService.getTeamMembers(id);
  }
  @Get('/:id/stats')
  getTeamStats(@Query(':id') id: string) {
    this.teamService.getTeamStats(id);
  }
  @Patch('/:id')
  patchTeam(@Query(':id') id: string) {
    this.teamService.patchTeam(id);
  }
}
