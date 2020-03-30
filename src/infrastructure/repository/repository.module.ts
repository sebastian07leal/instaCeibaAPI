import { Module } from '@nestjs/common';
import { UserPostMongo } from './service/UserPost.mongo';

@Module({
  providers: [ UserPostMongo],
  exports: [ UserPostMongo]
})
export class RepositoryModule {}