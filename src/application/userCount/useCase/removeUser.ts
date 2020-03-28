import { Injectable, Inject } from '@nestjs/common';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';

@Injectable()
export class RemoveUser {

  constructor(
    @Inject('UserCountMongo') private repository: UserCountMongo
  ){}

  public async deleteser(id: string): Promise<any> {
    return await this.repository.deleteUserInventory(id);
  }

}