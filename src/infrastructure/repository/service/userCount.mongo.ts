import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RepositoryUserCount } from 'src/domain/userCount/ports/repository.userCount';
import { UserCount } from 'src/domain/userCount/userCount';
import { UserCountEntity } from '../entity/userCount.entity';

@Injectable()
export class UserCountMongo implements RepositoryUserCount {

  constructor(
    @InjectModel('UserCount') private readonly userCount: Model<UserCountEntity>
  ){}

    async listedInventory(): Promise<any> {
      return this.userCount.find();
    }

    async addToInventory( user: UserCount): Promise<any> {
      const producCreate = new this.userCount(user);
      return await producCreate.save();
    }

    async deleteUserInventory(id: string): Promise<any> {
      return await this.userCount.findByIdAndDelete(id);
    } 


}