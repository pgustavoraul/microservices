import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Person } from './entities/person.entity';
import { PersonsResolver } from './resolvers/persons.resolver';
import { PersonsService } from './services/persons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonsResolver, PersonsService],
})
export class PersonsModule {}
