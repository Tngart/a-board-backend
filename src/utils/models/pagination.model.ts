import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PaginationQuery {
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1000)
  @Type(() => Number)
  limit = Number(process.env.PAGINATION_DEFAULT_LIMIT);

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  offset = Number(process.env.PAGINATION_DEFAULT_OFFSET);
}
