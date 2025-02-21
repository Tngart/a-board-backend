import { Injectable } from '@nestjs/common';
import { SignInUserDto } from './dto';
import { sign } from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'database/user/schema';
import { Model } from 'mongoose';
import { ErrorException } from 'core/exceptions';

@Injectable()
export class SignInUserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async exec({ username }: SignInUserDto) {
    const user = await this.userModel.findOne({ username });
    if (!user) throw ErrorException.UNAUTHORIZED();

    const accessToken = sign({ userId: user.id }, process.env.JWT_SECRET!);

    return { accessToken };
  }
}
