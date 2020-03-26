import { Module } from '@nestjs/common';
import DomainModule from 'src/domain/domain.module';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';

import { Listed } from './userCount/useCase/listed';
import { UserCountMongo} from 'src/infrastructure/repository/service/userCount.mongo';
import { from } from 'rxjs';


// @Module({
//   imports: [
//     DomainModule,
//     RepositoryModule,
//   ],
//   providers: [
//     Listed,
//     UserCountMongo,
//   ],
//   exports: [
//     Listed,
//     UserCountMongo,
//   ]
// })
// export class AplicationModule {}


@Module({
  imports: [
    DomainModule,
    Listed
  ],
  providers: [
    Listed,

  ],
  exports: [
    Listed,
  ]
})
export class AplicationModule {}