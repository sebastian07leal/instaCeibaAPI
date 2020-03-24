import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { UserCountModule } from './userCount/userCount.module';

@Module({
  imports: [
    ProductModule,
    UserCountModule,
  ],
})
export default class DomainModule {}