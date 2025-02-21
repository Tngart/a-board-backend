import { Prop, Schema } from '@nestjs/mongoose';
import { HistoricalDocument } from 'database/model';
import { Community } from './enum';

@Schema({ minimize: true, versionKey: false, timestamps: true })
export class PostDocument extends HistoricalDocument {
  @Prop()
  title: string;

  @Prop({ type: String, enum: Community })
  community: Community;

  @Prop()
  description: string;
}
