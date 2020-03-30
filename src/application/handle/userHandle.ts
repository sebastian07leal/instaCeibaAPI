import { Injectable } from '@nestjs/common';
import { UserPost } from 'src/domain/userPost/userPost';
import { UserCommand } from '../command/user.command';

@Injectable()
export class UserHandle {

  public createPost(productCommand: UserCommand): UserPost{
    return new UserPost(
      productCommand.likes,
      productCommand.title,
      productCommand.comment,
      productCommand.url,
    )
  }

}