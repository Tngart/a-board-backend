import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentConfiguration } from 'core/config/env.configuration';
import { DatabaseModule } from 'database/module';

@Module({
  imports: [
    ConfigModule.forRoot(environmentConfiguration),
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
