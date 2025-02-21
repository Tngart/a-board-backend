import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './services/register/dto';
import { RegisterUserService } from './services';
import { ResponseDto } from 'core/dto';

@Controller('users')
export class UsersController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    const user = await this.registerUserService.exec(dto);

    return ResponseDto.ok({ data: user });
  }
}
