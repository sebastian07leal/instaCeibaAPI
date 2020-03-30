import { Injectable, Inject } from '@nestjs/common';
import { UserPostMongo } from 'src/infrastructure/repository/service/UserPost.mongo';
import { UserCommand } from '../../command/user.command';
import { UserHandle } from '../../handle/userHandle';

@Injectable()
export class UpdateUser {

  constructor(
    @Inject('UserCountMongo') private repository: UserPostMongo,
    private userHandle: UserHandle
  ){}

    
  public async updateUserCount(id: string, inventory: UserCommand ): Promise<any> {
    const product = this.userHandle.createPost(inventory);
    return await this.repository.putUserInventory(id, product);
  }

}