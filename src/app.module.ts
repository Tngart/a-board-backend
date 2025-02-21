import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from '@uesrs/controller';
import { userServices } from '@uesrs/services';
import { environmentConfiguration } from 'core/config/env.configuration';
import { DatabaseModule } from 'database/module';

@Module({
  imports: [ConfigModule.forRoot(environmentConfiguration), DatabaseModule],
  controllers: [UsersController],
  providers: [...userServices],
})
export class AppModule {}
