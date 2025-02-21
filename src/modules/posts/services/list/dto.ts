import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Community } from 'database/post/enum';
import { PaginationQuery } from 'utils/models/pagination.model';

export class ListPostQuery extends PaginationQuery {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(Community)
  community: Community;

  @IsOptional()
  @IsString()
  description?: string;
}
