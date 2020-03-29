import { Injectable, Inject } from '@nestjs/common';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';
import { UserCommand } from '../../command/user.command';
import { UserHandle } from '../../handle/userHandle';

@Injectable()
export class UpdateUser {

  constructor(
    @Inject('UserCountMongo') private repository: UserCountMongo,
    private userHandle: UserHandle
  ){}

    
  public async updateUserCount(id: string, inventory: UserCommand ): Promise<any> {
    const product = this.userHandle.createProduct(inventory);
    console.log(`ANTES APP ${inventory.url}`)
    return await this.repository.putUserInventory(id, product);
  }

}