import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../../users/dto/create-user.input';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../services/auth.service';
import { usersService } from '../../users/services/users.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}


}
