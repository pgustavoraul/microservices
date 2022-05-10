import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from './users/entities/user.entity';
import { AuthService } from './users/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request): { access_token: string } {
    console.log('--------------------------------------',req.user,'--------------------------------------');

    return this.authService.login(req.user as User);
  }
}
