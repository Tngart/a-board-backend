import { Model, Schema } from 'mongoose';
import { PostDocument } from './document';
import { SchemaFactory } from '@nestjs/mongoose';

export abstract class Post extends PostDocument {}

export type PostModel = Model<Post>;

export const PostSchema = SchemaFactory.createForClass(PostDocument) as Schema<
  PostDocument,
  Model<Post>,
  Omit<Post, keyof PostDocument>,
  {},
  {},
  Omit<PostModel, keyof Model<Post>>
>;
