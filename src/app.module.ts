import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { UsersController } from '@uesrs/controller';
import { userServices } from '@uesrs/services';
import { AuthGuard } from 'auth/guard';
import { environmentConfiguration } from 'core/config/env.configuration';
import { DatabaseModule } from 'database/module';

@Module({
  imports: [ConfigModule.forRoot(environmentConfiguration), DatabaseModule],
  controllers: [UsersController],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },...userServices],
})
export class AppModule {}
