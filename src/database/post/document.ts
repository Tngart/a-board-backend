import { Prop } from '@nestjs/mongoose';
import { BaseSchema, HistoricalDocument } from 'database/model';
import { Community } from './enum';
import { Comment } from './embedded';

@BaseSchema()
export class PostDocument extends HistoricalDocument {
  @Prop()
  title: string;

  @Prop({ type: String, enum: Community })
  community: Community;

  @Prop()
  description?: string;

  @Prop({ type: [Comment.Schema], default: [] })
  comments: Comment[];
}
