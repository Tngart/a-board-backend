import { Model, Schema } from 'mongoose';
import { UserDocument } from './document';
import { SchemaFactory } from '@nestjs/mongoose';

export abstract class User extends UserDocument {}

export type UserModel = Model<User>;

export const UserSchema = SchemaFactory.createForClass(UserDocument) as Schema<
  UserDocument,
  Model<User>,
  Omit<User, keyof UserDocument>,
  {},
  {},
  Omit<UserModel, keyof Model<User>>
>;
