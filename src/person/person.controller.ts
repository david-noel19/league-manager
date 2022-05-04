import { Controller, Get, Query } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get('/:id')
  getPerson(@Query('id') id: string) {
    this.personService.getPerson(id);
  }
}
