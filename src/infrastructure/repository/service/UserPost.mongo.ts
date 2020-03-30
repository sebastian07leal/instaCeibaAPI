import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RepositoryUserPost } from 'src/domain/userPost/ports/repository.userPost';
import { UserPost } from 'src/domain/userPost/userPost';
import { UserPostEntity } from '../entity/userPost.entity';

@Injectable()
export class UserPostMongo implements RepositoryUserPost {

  constructor(
    @InjectModel('UserCount') private readonly userCount: Model<UserPostEntity>
  ){}

    async listedInventory(): Promise<any> {
      return this.userCount.find();
    }

    async addToInventory( user: UserPost): Promise<any> {
      const producCreate = new this.userCount(user);
      return await producCreate.save();
    }

    async deleteUserInventory(id: string): Promise<any> {
      return await this.userCount.findByIdAndDelete(id);
    }

    async putUserInventory(id: string, inventory: UserPost): Promise<any> {
      return await this.userCount.findByIdAndUpdate(id, inventory, {new: true});
    }


}