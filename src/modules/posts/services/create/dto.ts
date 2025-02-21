import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Community } from 'database/post/enum';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsEnum(Community)
  community: Community;

  @IsOptional()
  @IsString()
  description?: string;
}
