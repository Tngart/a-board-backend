import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreatePostService,
  DeletePostService,
  GetPostService,
  ListPostService,
  PostHelperService,
  UpdateMessageService,
  UpdatePostService,
} from './services';
import { CreatePostDto } from './services/create/dto';
import { AuthenticatedUser, PublicApi } from 'auth/decorators';
import { IdParam, ResponseDto } from 'core/dto';
import { UpdatePostDto } from './services/update/dto';
import { ListPostQuery } from './services/list/dto';
import { UserInfo } from 'utils/models/request.model';
import { UpdateMessageDto } from './services/update-message/dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly createPostService: CreatePostService,
    private readonly deletePostService: DeletePostService,
    private readonly getPostService: GetPostService,
    private readonly listPostService: ListPostService,
    private readonly updatePostService: UpdatePostService,
    private readonly updateMessageService: UpdateMessageService,
    private readonly helper: PostHelperService,
  ) {}

  @Post()
  async create(@AuthenticatedUser() { userId }: UserInfo, @Body() dto: CreatePostDto) {
    const data = await this.createPostService.exec(dto, userId);

    return ResponseDto.ok({ data });
  }

  @Get(':id')
  @PublicApi()
  async get(@Param() { id }: IdParam) {
    const data = await this.getPostService.exec(id);

    return ResponseDto.ok({ data });
  }

  @Get()
  @PublicApi()
  async list(@Query() query: ListPostQuery) {
    const { posts } = await this.listPostService.exec(query);

    return ResponseDto.ok({ data: posts });
  }

  @Get('my/post')
  async myPosts(@AuthenticatedUser() { userId }: UserInfo) {
    const { posts } = await this.listPostService.exec({
      createdBy: userId.toString(),
    } as ListPostQuery);

    return ResponseDto.ok({ data: posts });
  }

  @Patch(':id')
  async update(
    @AuthenticatedUser() { userId }: UserInfo,
    @Param() { id }: IdParam,
    @Body() dto: UpdatePostDto,
  ) {
    const post = await this.getPostService.exec(id);
    this.helper.checkPostOwner(post, userId);
    const data = await this.updatePostService.exec(dto, post);

    return ResponseDto.ok({ data });
  }

  @Patch(':id/message')
  async updateMessage(
    @AuthenticatedUser() { username }: UserInfo,
    @Param() { id }: IdParam,
    @Body() dto: UpdateMessageDto,
  ) {
    const post = await this.getPostService.exec(id);
    const data = await this.updateMessageService.exec(dto, post, username);

    return ResponseDto.ok({ data });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@AuthenticatedUser() { userId }: UserInfo, @Param() { id }: IdParam) {
    const post = await this.getPostService.exec(id);
    this.helper.checkPostOwner(post, userId);
    await this.deletePostService.exec(post);
  }
}
