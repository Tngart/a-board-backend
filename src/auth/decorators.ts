import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';
import { Request } from 'utils/models/request.model';

export const AuthenticatedUser = createParamDecorator((_: unknown, context: ExecutionContext) => {
  return context.switchToHttp().getRequest<Request>().userInfo;
});

export const PublicApi = () => SetMetadata('isPublicApi', true);
