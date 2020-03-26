import { Injectable, Inject } from '@nestjs/common';
import { RepositoryUserCount } from 'src/domain/userCount/ports/repository.userCount';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';

@Injectable()
export class Listed {


  constructor(
    @Inject('UserCountMongo') private  ref: UserCountMongo
  ){}

  getAll() {
    return this.ref.listedInventory();
  }

  createListed( prom ) {
    return this.ref. addToInventory(prom);
  }



}
