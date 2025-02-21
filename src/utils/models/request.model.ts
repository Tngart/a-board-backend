import { ObjectId } from 'database/model';
import { Request as ExpressRequest } from 'express';

export class UserInfo {
  userId: ObjectId;
  username: string;
}

export type Request = ExpressRequest & { userInfo: UserInfo };
