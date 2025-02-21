import { CreatePostService } from './create/service';
import { DeletePostService } from './delete/service';
import { GetPostService } from './get/service';
import { PostHelperService } from './helper.service';
import { ListPostService } from './list/service';
import { UpdatePostService } from './update/service';

export {
  CreatePostService,
  DeletePostService,
  GetPostService,
  ListPostService,
  PostHelperService,
  UpdatePostService,
};

export const postServices = [
  CreatePostService,
  DeletePostService,
  GetPostService,
  ListPostService,
  PostHelperService,
  UpdatePostService,
];
