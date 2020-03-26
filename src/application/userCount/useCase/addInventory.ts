import { Injectable, Inject } from '@nestjs/common';
import { RepositoryUserCount } from 'src/domain/userCount/ports/repository.userCount';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';

@Injectable()
export class AddInventory {

    constructor(
      @Inject('UserCountMongo') private ref: UserCountMongo
    ){}

    createListed( prom ) {
      return this.ref. addToInventory(prom);
    }

}