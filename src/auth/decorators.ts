import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const AuthenticatedUser = createParamDecorator((_: unknown, context: ExecutionContext) => {
  return context.switchToHttp().getRequest<Request & { userId: string }>().userId;
});

export const PublicApi = () => SetMetadata('isPublicApi', true);
