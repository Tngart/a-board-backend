import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentConfiguration } from 'core/config/env.configuration';

@Module({
  imports: [ConfigModule.forRoot(environmentConfiguration),],
  controllers: [],
  providers: [],
})
export class AppModule {}
