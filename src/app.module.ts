import { Module, DynamicModule } from '@nestjs/common';
import { AplicationModule } from './application/aplication.module';
import InflastructureModule from './infrastructure/inflastructure.module';

@Module({})
export class AppModule {

  static foorRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        AplicationModule,
        InflastructureModule.foorRoot() 
      ],
    }
  }
}

