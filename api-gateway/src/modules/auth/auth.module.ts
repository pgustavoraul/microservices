import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { PassportModule } from '@nestjs/passport';
import { Constantes } from 'src/config/constantes';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

import { AuthService } from './services/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: Constantes.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
