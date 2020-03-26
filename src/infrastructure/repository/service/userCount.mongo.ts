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

    async listed(): Promise<any> {
      return await this.userCount.find();
    }


}