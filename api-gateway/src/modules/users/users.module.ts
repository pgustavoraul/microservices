import { Module } from '@nestjs/common';
import { usersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './resolvers/users.resolver';
import { AuthService } from '../auth/services/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, usersService],
  exports: [usersService],
})
export class UsersModule {}
