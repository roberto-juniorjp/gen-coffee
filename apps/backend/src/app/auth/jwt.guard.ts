import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean {
    return super.canActivate(context) as boolean;
  }

  handleRequest(err, user, info: Error) {
    console.log('JWT Guard:', { err, user, info });
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}