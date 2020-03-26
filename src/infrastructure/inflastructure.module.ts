import { Module, DynamicModule } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';



import { MongooseModule } from '@nestjs/mongoose';
import { UserCountSchema } from './repository/shema/userCountSchema';
import { AplicationModule } from 'src/application/aplication.module';
import { RepositoryModule } from './repository/repository.module';
import { UserCountMongo } from './repository/service/userCount.mongo';
import { UserCount } from 'src/domain/userCount/userCount';
import { Listed } from 'src/application/userCount/useCase/listed';

@Module({})
export default class InflastructureModule {
  static foorRoot(): DynamicModule {
    return {
      module: InflastructureModule,
      imports: [
        AplicationModule,
        MongooseModule.forRoot('mongodb+srv://db_sebastian_leal:SBETEL07l@cluster0-hybml.mongodb.net/test?retryWrites=true&w=majority'),
        MongooseModule.forFeature([{ name: 'UserCount', schema: UserCountSchema }])
      ],
      controllers: [
        ProductController
      ],
    };
  }
}
