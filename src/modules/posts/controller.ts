import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import {
  CreatePostService,
  DeletePostService,
  GetPostService,
  ListPostService,
  PostHelperService,
  UpdatePostService,
} from './services';
import { CreatePostDto } from './services/create/dto';
import { AuthenticatedUser } from 'auth/decorators';
import { ObjectId } from 'database/model';
import { IdParam, ResponseDto } from 'core/dto';
import { UpdatePostDto } from './services/update/dto';
import { ListPostQuery } from './services/list/dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly createPostService: CreatePostService,
    private readonly deletePostService: DeletePostService,
    private readonly getPostService: GetPostService,
    private readonly listPostService: ListPostService,
    private readonly updatePostService: UpdatePostService,
    private readonly helper: PostHelperService,
  ) {}

  @Post()
  async create(@AuthenticatedUser() userId: ObjectId, @Body() dto: CreatePostDto) {
    const data = await this.createPostService.exec(dto, userId);

    return ResponseDto.ok({ data });
  }

  @Get(':id')
  async get(@Param() { id }: IdParam) {
    const data = await this.getPostService.exec(id);

    return ResponseDto.ok({ data });
  }

  @Get()
  async list(@Query() query: ListPostQuery) {
    const { posts, meta } = await this.listPostService.exec(query);

    return ResponseDto.ok({ meta, data: posts });
  }

  @Patch(':id')
  async update(
    @AuthenticatedUser() userId: ObjectId,
    @Param() { id }: IdParam,
    @Body() dto: UpdatePostDto,
  ) {
    const post = await this.getPostService.exec(id);
    this.helper.checkPostOwner(post, userId);
    const data = await this.updatePostService.exeec(dto, post);

    return ResponseDto.ok({ data });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@AuthenticatedUser() userId: ObjectId, @Param() { id }: IdParam) {
    const post = await this.getPostService.exec(id);
    this.helper.checkPostOwner(post, userId);
    await this.deletePostService.exec(post);
  }
}
