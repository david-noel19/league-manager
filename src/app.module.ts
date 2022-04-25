import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersController } from './members/members.controller';
import { MembersModule } from './members/members.module';

@Module({
  imports: [MembersModule],
  controllers: [AppController, MembersController],
  providers: [AppService],
})
export class AppModule {}
