import { Prop, Schema, SchemaOptions } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import { Document, SchemaTypes, Types } from 'mongoose';

export import ObjectId = Types.ObjectId;

export const BaseSchema = (options?: SchemaOptions) =>
  Schema({ minimize: true, versionKey: false, timestamps: true, ...options });

export const EmbeddedSchema = (options?: SchemaOptions) =>
  Schema({ _id: false, versionKey: false, ...options });

export const DateStringProp = () =>
  Prop({
    set: (v: string | Date) =>
      DateTime.fromJSDate(new Date(v), { zone: 'UTC+7' }).toFormat(`yyyy-LL-dd'T'HH:mm:ssZZ`),
  });

export const ObjectIdProp = (ref: { ref: string } | { refPath: string }) =>
  Prop({ type: SchemaTypes.ObjectId, ...ref });

export const ArrayOfObjectIdsProp = (ref: { ref: string } | { refPath: string }) =>
  Prop({ type: [SchemaTypes.ObjectId], default: [], ...ref });

export const ArrayOfObjectIdsPropNoDefault = (ref: { ref: string } | { refPath: string }) =>
  Prop({ type: [SchemaTypes.ObjectId], ...ref });

export class TimestampDocument extends Document<ObjectId> {
  id: string;
  @DateStringProp() createdAt: string;
  @DateStringProp() updatedAt: string;
}

export class HistoricalDocument extends TimestampDocument {
  @ObjectIdProp({ ref: 'User' }) createdBy: ObjectId;
  @ObjectIdProp({ ref: 'User' }) updatedBy: ObjectId;
}
