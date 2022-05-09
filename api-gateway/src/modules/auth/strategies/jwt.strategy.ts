import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { Constantes } from 'src/config/constantes';
import { User } from '../users/entities/user.entity';
import { usersService } from '../users/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: usersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Constantes.JWT_SECRET,
    });
  }

  validate(validationPayload: { nic: string; sub: string }): Promise <User | null>  {
    return this.usersService.findOne(validationPayload.nic);
  }
}
