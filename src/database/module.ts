import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getDatabaseFactory } from 'core/config/database.configuration';
import { User, UserSchema } from './user/schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useFactory: getDatabaseFactory }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
