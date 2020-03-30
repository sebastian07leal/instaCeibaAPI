import { Injectable, Inject } from '@nestjs/common';
import { UserPostMongo } from 'src/infrastructure/repository/service/UserPost.mongo';
import { UserHandle } from '../../handle/userHandle';
import { UserCommand } from '../../command/user.command';

@Injectable()
export class AddInventory {

    constructor(
      @Inject('UserCountMongo') private repository: UserPostMongo,
      private userHandle: UserHandle
    ){}

    public async handle(user: UserCommand): Promise<any> {
        const responceObject = this.userHandle.createPost(user);
      return await this.repository.addToInventory(responceObject); 
    }
 
}