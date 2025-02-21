import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorException } from 'core/exceptions';
import { ObjectId } from 'database/model';
import { User } from 'database/user/schema';
import { Model } from 'mongoose';

@Injectable()
export class GetUserService {
  constructor(@InjectModel(User.name) private readonly uesrModel: Model<User>) {}

  async exec(id: ObjectId) {
    const user = await this.uesrModel.findById(id);
    if (!user) throw ErrorException.NOT_FOUND_WITH({ message: `Not fount user with Id: ${id}` });

    return user;
  }
}
