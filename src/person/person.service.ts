import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  getPerson(id) {
    return `This is supposed to get the person with id: ${id}`;
  }
}
