import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entities/user.entity';

@Module({
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
