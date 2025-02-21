import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from 'database/user/schema';
import { RegisterUserDto } from './dto';
import { MongoErrorCode } from 'utils/mongoose/mongoose.enum';
import { ErrorException } from 'core/exceptions';

@Injectable()
export class RegisterUserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}

  async exec(dto: RegisterUserDto) {
    try {
      const user = await new this.userModel(dto).save();

      return user;
    } catch (error) {
      console.error(error.stack);

      if (error.code === MongoErrorCode.DUPLICATE_KEY) {
        const [duplicateKey] = Object.keys(error.keyPattern);

        throw ErrorException.CONFLICT_WITH({ message: `${duplicateKey} already exist` });
      }

      throw error;
    }
  }
}
