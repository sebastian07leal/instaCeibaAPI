import { Injectable, Inject } from '@nestjs/common';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';
import { UserHandle } from '../../handle/userHandle';
import { UserCommand } from '../../command/user.command';

@Injectable()
export class AddInventory {

    constructor(
      @Inject('UserCountMongo') private repository: UserCountMongo,
      private userHandle: UserHandle
    ){}

    public async handle(user: UserCommand): Promise<any> {
        const responceObject = this.userHandle.createProduct(user);
      return await this.repository.addToInventory(responceObject); 
    }
 
}