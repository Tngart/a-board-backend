import { IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  username: string;
}
