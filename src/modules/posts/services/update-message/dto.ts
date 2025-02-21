import { IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  commentMessage: string;
}
