import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RepositoryUserCount } from 'src/domain/userCount/ports/repository.userCount';
import { UserCountEntity } from '../entity/userCount.entity';

@Injectable()
export class UserCountMongo implements RepositoryUserCount {

  constructor(
    @InjectModel('UserCount') private readonly userCount: Model<UserCountEntity>
  ){}

    listedInventory(): any {
      console.log('CONSULTO')
      return this.userCount.find();
    }

    addToInventory(product: any): any {
      const prod = new this.userCount(product);
      return prod.save();
    }


}