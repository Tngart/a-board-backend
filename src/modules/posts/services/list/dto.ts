import { IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Community } from 'database/post/enum';

export class ListPostQuery {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(Community)
  community: Community;

  @IsOptional()
  @IsMongoId()
  createdBy?: string;
}
