import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorException } from 'core/exceptions';
import { ObjectId } from 'database/model';
import { Post } from 'database/post/schema';

@Injectable()
export class PostHelperService {
  constructor() {}

  async checkPostOwner(post: Post, usreId: ObjectId) {
    if (post.createdBy.toString() !== usreId.toString()) throw ErrorException.FORBIDDEN;
  }
}
