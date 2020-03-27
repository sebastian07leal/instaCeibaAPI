import { Injectable } from '@nestjs/common';
import { UserCount } from 'src/domain/userCount/userCount';
import { UserCommand } from '../command/user.command';

export class UserHandle {

  public createProduct(productCommand: UserCommand): UserCount{
    return new UserCount(
      productCommand.cash,
      productCommand.name,
      productCommand.inventary
    )
  }

}