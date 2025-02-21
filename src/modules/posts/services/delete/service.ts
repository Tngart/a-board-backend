import { Injectable } from '@nestjs/common';
import { Post } from 'database/post/schema';

@Injectable()
export class DeletePostService {
  constructor() {}

  async exec(post: Post) {
    return post.deleteOne();
  }
}
