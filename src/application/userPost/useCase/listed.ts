import { Injectable, Inject } from '@nestjs/common';
import { UserPostMongo } from 'src/infrastructure/repository/service/UserPost.mongo';

@Injectable()
export class Listed {

  constructor(
    @Inject('UserCountMongo') private  repository: UserPostMongo
  ){}

  public async listedUser(): Promise<any> {
    return await this.repository.listedInventory();
  }


}
