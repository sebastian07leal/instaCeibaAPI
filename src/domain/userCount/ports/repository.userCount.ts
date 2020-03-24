import { Product } from '../../products/product';

export abstract class RepositoryUserCount {

  abstract async addToInventory( producto: Product ): Promise<boolean>;
  abstract async listed(): Promise<Product[]>; 
  
}