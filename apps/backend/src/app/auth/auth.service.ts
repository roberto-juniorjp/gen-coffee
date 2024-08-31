import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}