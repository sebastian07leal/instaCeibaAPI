import { Module, DynamicModule } from '@nestjs/common';
import InflastructureModule from './infrastructure/inflastructure.module';


// import { AplicationModule } from './application/aplication.module';
// import DomainModule from './domain/domain.module';



// import { RepositoryModule } from './infrastructure/repository/repository.module';

// @Module({})
// export class AppModule {

//   static foorRoot(): DynamicModule {
//     return {
//       module: AppModule,
//       imports: [
//         DomainModule,
//         AplicationModule,
//         InflastructureModule.foorRoot() 
//       ],
//     }
//   }
// }


import { testService } from './infrastructure/controllers/test.service';

@Module({})
export class AppModule {

  static foorRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        InflastructureModule.foorRoot(),
      ],
      providers: [
        testService
      ]
    }
  }
}
