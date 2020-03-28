import { Module } from '@nestjs/common';
import DomainModule from 'src/domain/domain.module';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCountSchema } from '../infrastructure/repository/shema/userCountSchema';
import { UserHandle } from './handle/userHandle';

import { Listed } from './userCount/useCase/listed';
import { AddInventory } from './userCount/useCase/addInventory';
import { RemoveUser } from './userCount/useCase/removeUser';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'UserCount',
        schema: UserCountSchema
      }
    ])
  ],
  providers: [
    RepositoryModule,
    Listed,
    UserHandle,
    AddInventory,
    RemoveUser,
      {
          provide: 'UserCountMongo',
          useClass: UserCountMongo,
      }
  ]
  ,
  exports: [
    UserHandle,
    Listed,
    AddInventory,
    RemoveUser,
  ]
})
export class AplicationModule {}