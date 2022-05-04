import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreatePersonInput } from '../dto/create-person.input';
import { Person } from '../entities/person.entity';
import { PersonsService } from '../services/persons.service';

@Resolver(() => Person)
export class PersonsResolver {
  constructor(private readonly personsService: PersonsService) {}

  @Mutation(() => Person)
  createPerson(@Args('createPersonInput') createPersonInput: CreatePersonInput) {
    return this.personsService.create(createPersonInput);
  }

  @Query(() => [Person], { name: 'persons' })
  findAll() {
    return this.personsService.findAll();
  }

  // @Query(() => PersonType, { name: 'person' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.personsService.findOne(id);
  // }

  // @Mutation(() => PersonType)
  // updatePerson(@Args('updatePersonInput') updatePersonInput: UpdatePersonInput) {
  //   return this.personsService.update(updatePersonInput.id, updatePersonInput);
  // }

  // @Mutation(() => PersonType)
  // removePerson(@Args('id', { type: () => Int }) id: number) {
  //   return this.personsService.remove(id);
  // }
}
