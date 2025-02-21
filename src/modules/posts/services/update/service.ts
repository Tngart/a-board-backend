import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostModel } from 'database/post/schema';
import { UpdatePostDto } from './dto';
import { ObjectId } from 'database/model';

@Injectable()
export class UpdatePostService {
  constructor(@InjectModel(Post.name) private readonly postModel: PostModel) {}

  async exeec(dto: UpdatePostDto, post: Post) {
    const { title, community, description } = dto;

    if (title) post.title = title;
    if (community) post.community = community;
    if (description) post.description = description;

    return post.save();
  }
}
