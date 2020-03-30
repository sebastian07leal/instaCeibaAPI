import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { UserPostMongo } from 'src/infrastructure/repository/service/UserPost.mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPostSchema } from '../infrastructure/repository/shema/userPostSchema';
import { UserHandle } from './handle/userHandle';

import { Listed } from './userPost/useCase/listed';
import { AddInventory } from './userPost/useCase/addInventory';
import { RemoveUser } from './userPost/useCase/removeUser';
import { UpdateUser } from './userPost/useCase/updateUser';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'UserCount',
        schema: UserPostSchema
      }
    ])
  ],
  providers: [
    RepositoryModule,
    Listed,
    UserHandle,
    AddInventory,
    RemoveUser,
    UpdateUser,
      {
          provide: 'UserCountMongo',
          useClass: UserPostMongo,
      }
  ]
  ,
  exports: [
    UserHandle,
    Listed,
    AddInventory,
    RemoveUser,
    UpdateUser
  ]
})
export class AplicationModule {}