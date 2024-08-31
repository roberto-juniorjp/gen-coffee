import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(userId: number, username: string): Promise<string> {
    const payload = { sub: userId, username };
    return this.jwtService.sign(payload);
  }
}