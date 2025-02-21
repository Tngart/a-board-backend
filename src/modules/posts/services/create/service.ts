import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostModel } from 'database/post/schema';
import { ObjectId } from 'database/model';

@Injectable()
export class CreatePostService {
  constructor(@InjectModel(Post.name) private readonly postModel: PostModel) {}

  async exec(dto: CreatePostDto, userId: ObjectId) {
    const post = new this.postModel(dto);

    post.createdBy = userId;
    post.updatedBy = userId;

    return post.save();
  }
}
