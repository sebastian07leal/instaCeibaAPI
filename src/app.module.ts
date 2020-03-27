import { Module, DynamicModule } from '@nestjs/common';

import DomainModule from './domain/domain.module';
import { AplicationModule } from './application/aplication.module';
import InflastructureModule from './infrastructure/inflastructure.module';

@Module({})
export class AppModule {

  static foorRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DomainModule,
        AplicationModule,
        InflastructureModule.foorRoot() 
      ],
    }
  }
}

