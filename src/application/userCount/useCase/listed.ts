import { Injectable, Inject } from '@nestjs/common';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';

@Injectable()
export class Listed {

  constructor(
    @Inject('UserCountMongo') private  repository: UserCountMongo
  ){}

  public async listedUser(): Promise<any> {
    return await this.repository.listedInventory();
  }


}
