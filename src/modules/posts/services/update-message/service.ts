import { Injectable } from '@nestjs/common';
import { Post } from 'database/post/schema';
import { UpdateMessageDto } from './dto';
import { Comment } from 'database/post/embedded';
import { DateTime } from 'luxon';

@Injectable()
export class UpdateMessageService {
  constructor() {}

  async exec(dto: UpdateMessageDto, post: Post, username: string) {
    const { commentMessage } = dto;

    if (commentMessage) {
      const comment: Comment = {
        message: commentMessage,
        updatedBy: username,
        updatedAt: DateTime.now().setZone('UTC+7').toFormat(`yyyy-LL-dd'T'HH:mm:ssZZ`),
      };
      post.comments.push(comment);
    }

    return post.save();
  }
}
