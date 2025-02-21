import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';
import { ObjectId } from 'database/model';
import { Request } from 'express';

export const AuthenticatedUser = createParamDecorator((_: unknown, context: ExecutionContext) => {
  return context.switchToHttp().getRequest<Request & { userId: ObjectId }>().userId;
});

export const PublicApi = () => SetMetadata('isPublicApi', true);
