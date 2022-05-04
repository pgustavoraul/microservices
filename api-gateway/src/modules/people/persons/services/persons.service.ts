import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonInput } from '../dto/create-person.input';
import { UpdatePersonInput } from '../dto/update-person.input';
import { Person } from '../entities/person.entity';


@Injectable()
export class PersonsService {
  constructor (@InjectRepository(Person) private readonly personRepository: Repository<Person>) {}

  create(createPersonInput: CreatePersonInput) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all persons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
