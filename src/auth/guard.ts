import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ErrorException } from 'core/exceptions';
import { decode } from 'jsonwebtoken';
import { Request, UserInfo } from 'utils/models/request.model';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly BEARER_AUTHENTICATION_SIZE = 'Bearer '.length;

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest<Request>();
      const isPublicApi = this.reflector.get<boolean>('isPublicApi', context.getHandler());
      if (isPublicApi) return true;

      const accessToken = request.headers.authorization?.slice(this.BEARER_AUTHENTICATION_SIZE);
      if (!accessToken) throw ErrorException.UNAUTHORIZED();

      const { userId, username } = decode(accessToken) as UserInfo;

      request.userInfo = { userId, username };

      return true;
    } catch {
      throw ErrorException.UNAUTHORIZED();
    }
  }
}
