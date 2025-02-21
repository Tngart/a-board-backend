import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterUserDto } from './services/register/dto';
import { GetUserService, RegisterUserService, SignInUserService } from './services';
import { ResponseDto } from 'core/dto';
import { SignInUserDto } from './services/sign-in/dto';
import { AuthenticatedUser, PublicApi } from 'auth/decorators';
import { UserInfo } from 'utils/models/request.model';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly registerUserService: RegisterUserService,
    private readonly signinUserService: SignInUserService,
  ) {}

  @Post('register')
  @PublicApi()
  async register(@Body() dto: RegisterUserDto) {
    const data = await this.registerUserService.exec(dto);

    return ResponseDto.ok({ data });
  }

  @Post('sign-in')
  @PublicApi()
  async signin(@Body() dto: SignInUserDto) {
    const data = await this.signinUserService.exec(dto);

    return ResponseDto.ok({ data });
  }

  @Get('me')
  async getMe(@AuthenticatedUser() { userId }: UserInfo) {
    const data = await this.getUserService.exec(userId);

    return ResponseDto.ok({ data });
  }
}
