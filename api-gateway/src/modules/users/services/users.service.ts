import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class usersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  async findOne(nic: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { nic: nic } });
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
