import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsResolver } from './persons.resolver';

@Module({
  providers: [PersonsResolver, PersonsService]
})
export class PersonsModule {}
