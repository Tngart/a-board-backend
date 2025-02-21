import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { DateStringProp, EmbeddedSchema } from 'database/model';

@EmbeddedSchema()
export class Comment {
  @Prop() message: string;
  @Prop() updatedBy: string;
  @DateStringProp() updatedAt: string;

  static get Schema() {
    return SchemaFactory.createForClass(Comment);
  }
}
