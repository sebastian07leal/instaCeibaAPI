import { Module } from '@nestjs/common';
import { UserCountMongo } from './service/userCount.mongo';

@Module({
  providers: [ UserCountMongo],
  exports: [ UserCountMongo]
})
export class RepositoryModule {}