import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Constantes } from 'src/config/constantes';
import { User } from '../entities/user.entity';
import { usersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: usersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nic: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(nic);
    if (!user) {
      return null;
    }

    const passwordValid = user.password === pass;

    return passwordValid ? user : null;
  }

  login(user: User): { access_token: string } {
    console.log(user);

    const payload = {
      nic: user.nic,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verify(token: string): Promise < User | Error > {
    const decoded = this.jwtService.verify(token, {
      secret: Constantes.JWT_SECRET,
    });

    const user = await this.usersService.findOne(decoded.nic);

    if (!user) {
      throw new Error('Unable to get the user from decoded token.');
    }

    return user;
  }
}
