import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonsService } from './persons.service';
import { PersonType } from './types/person.type';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

@Resolver(() => PersonType)
export class PersonsResolver {
  constructor(private readonly personsService: PersonsService) {}

  @Mutation(() => PersonType)
  createPerson(@Args('createPersonInput') createPersonInput: CreatePersonInput) {
    return this.personsService.create(createPersonInput);
  }

  @Query(() => [PersonType], { name: 'persons' })
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
