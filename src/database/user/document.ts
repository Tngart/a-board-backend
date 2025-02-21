import { Prop, Schema } from '@nestjs/mongoose';
import { HistoricalDocument } from 'database/model';

@Schema({ minimize: true, versionKey: false, timestamps: true })
export class UserDocument extends HistoricalDocument {
  @Prop({ sparse: true, unique: true })
  username: string;
}
