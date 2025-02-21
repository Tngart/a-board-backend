import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Community } from 'database/post/enum';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(Community)
  community?: Community;

  @IsOptional()
  @IsString()
  description?: string;
}
