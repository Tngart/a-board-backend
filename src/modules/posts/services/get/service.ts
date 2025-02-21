import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorException } from 'core/exceptions';
import { Post, PostModel } from 'database/post/schema';

@Injectable()
export class GetPostService {
  constructor(@InjectModel(Post.name) private readonly postModel: PostModel) {}

  async exec(postId: string) {
    const post = await this.postModel.findById(postId);
    if (!post)
      throw ErrorException.NOT_FOUND_WITH({ message: `Not found post with ID: ${postId}` });

    return post;
  }
}
