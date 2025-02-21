import { IsString } from 'class-validator';

export class UpdaetMessageDto {
  @IsString()
  commentMessage: string;
}
