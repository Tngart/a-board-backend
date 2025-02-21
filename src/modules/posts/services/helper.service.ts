import { Injectable } from '@nestjs/common';
import { ErrorException } from 'core/exceptions';
import { ObjectId } from 'database/model';
import { Post } from 'database/post/schema';

@Injectable()
export class PostHelperService {
  constructor() {}

  checkPostOwner(post: Post, usreId: ObjectId) {
    if (post.createdBy.toString() !== usreId.toString()) throw ErrorException.FORBIDDEN();
  }
}
