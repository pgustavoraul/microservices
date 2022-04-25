import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonEntity } from './entities/person.entity';
import { PersonsResolver } from './persons.resolver';
import { PersonsService } from './persons.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ PersonEntity ]) ],
  providers: [PersonsResolver, PersonsService]
})
export class PersonsModule {}
