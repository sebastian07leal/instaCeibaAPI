import { Injectable } from '@nestjs/common';
import { UserCount } from 'src/domain/userCount/userCount';
import { UserCommand } from '../command/user.command';

@Injectable()
export class UserHandle {

  public createProduct(productCommand: UserCommand): UserCount{
    return new UserCount(
      productCommand.likes,
      productCommand.title,
      productCommand.comment,
      productCommand.url,
    )
  }

}