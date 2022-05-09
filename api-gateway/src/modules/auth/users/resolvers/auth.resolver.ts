import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { usersService } from '../services/users.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}


}
