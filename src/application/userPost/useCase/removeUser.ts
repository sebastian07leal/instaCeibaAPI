import { Injectable, Inject } from '@nestjs/common';
import { UserPostMongo } from 'src/infrastructure/repository/service/UserPost.mongo';

@Injectable()
export class RemoveUser {

  constructor(
    @Inject('UserCountMongo') private repository: UserPostMongo
  ){}

  public async deleteser(id: string): Promise<any> {
    return await this.repository.deleteUserInventory(id);
  }

}