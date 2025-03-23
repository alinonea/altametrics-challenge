import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    // const saltOrRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const isMatch = await bcrypt.compare(password, user?.password);
    // console.log(isMatch, hashedPassword, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user?.id, email: user?.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}