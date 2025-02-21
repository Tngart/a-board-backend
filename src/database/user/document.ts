import { Prop } from '@nestjs/mongoose';
import { BaseSchema, HistoricalDocument } from 'database/model';

@BaseSchema()
export class UserDocument extends HistoricalDocument {
  @Prop({ sparse: true, unique: true })
  username: string;
}
