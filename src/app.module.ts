import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { PostsController } from '@posts/controller';
import { postServices } from '@posts/services';
import { UsersController } from '@uesrs/controller';
import { userServices } from '@uesrs/services';
import { AuthGuard } from 'auth/guard';
import { environmentConfiguration } from 'core/config/env.configuration';
import { DatabaseModule } from 'database/module';

@Module({
  imports: [ConfigModule.forRoot(environmentConfiguration), DatabaseModule],
  controllers: [PostsController, UsersController],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_PIPE, useValue: new ValidationPipe({ transform: true, whitelist: true }) },
    ...postServices,
    ...userServices,
  ],
})
export class AppModule {}
