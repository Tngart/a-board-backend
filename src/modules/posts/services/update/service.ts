import { Injectable } from '@nestjs/common';
import { Post } from 'database/post/schema';
import { UpdatePostDto } from './dto';

@Injectable()
export class UpdatePostService {
  constructor() {}

  async exec(dto: UpdatePostDto, post: Post) {
    const { title, community, description } = dto;

    if (title) post.title = title;
    if (community) post.community = community;
    if (description) post.description = description;

    return post.save();
  }
}
