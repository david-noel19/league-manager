import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './member/member.controller';
import { MemberModule } from './member/member.module';
import { MemberService } from './member/member.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { PersonModule } from './person/person.module';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';

@Module({
  imports: [MemberModule, PersonModule, TeamModule],
  controllers: [AppController, MemberController, PersonController, TeamController],
  providers: [AppService, MemberService, PersonService, TeamService],
})
export class AppModule {}
