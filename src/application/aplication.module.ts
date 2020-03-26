import { Module } from '@nestjs/common';
import DomainModule from 'src/domain/domain.module';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { Listed } from './userCount/useCase/listed';
import { AddInventory } from './userCount/useCase/addInventory';
import { UserCountMongo } from 'src/infrastructure/repository/service/userCount.mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCountSchema } from '../infrastructure/repository/shema/userCountSchema';


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
    AddInventory,
      {
          provide: 'UserCountMongo',
          useClass: UserCountMongo,
      }
  ]
  ,
  exports: [
    Listed,
    AddInventory,
  ]
})
export class AplicationModule {}