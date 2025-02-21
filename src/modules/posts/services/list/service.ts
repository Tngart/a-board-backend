import { Injectable } from '@nestjs/common';
import { ListPostQuery } from './dto';
import { FilterQuery, Model } from 'mongoose';
import { Post } from 'database/post/schema';
import { InjectModel } from '@nestjs/mongoose';
import { RegExpr } from 'utils/helpers/regex';
import { ObjectId } from 'database/model';

@Injectable()
export class ListPostService {
  constructor(@InjectModel(Post.name) private readonly postModel: Model<Post>) {}

  async exec({ title, community, createdBy }: ListPostQuery) {
    const filterQuery: FilterQuery<Post> = {};
    if (title) filterQuery.title = { $regex: RegExpr.fromString(title, 'i') };
    if (community) filterQuery.community = community;
    if (createdBy) filterQuery.createdBy = new ObjectId(createdBy);

    const total = await this.postModel.countDocuments(filterQuery);
    const meta = { total };

    if (!total) return { posts: [], meta };

    const posts = await this.postModel.find(filterQuery).sort({ updatedAt: -1, _id: 1 });

    return { posts, meta };
  }
}
