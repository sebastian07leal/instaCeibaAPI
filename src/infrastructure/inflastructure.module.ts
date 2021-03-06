import { Module, DynamicModule } from '@nestjs/common';
import { PostControler } from './controllers/post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPostSchema } from './repository/shema/userPostSchema';
import { AplicationModule } from 'src/application/aplication.module';

@Module({})
export default class InflastructureModule {
  static foorRoot(): DynamicModule {
    return {
      module: InflastructureModule,
      imports: [
        AplicationModule,
        MongooseModule.forRoot('mongodb+srv://db_sebastian_leal:SBETEL07l@cluster0-hybml.mongodb.net/test?retryWrites=true&w=majority'),
        MongooseModule.forFeature([{ name: 'UserCount', schema: UserPostSchema }])
      ],
      controllers: [
        PostControler
      ],
    };
  }
}
