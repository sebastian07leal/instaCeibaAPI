import { Product } from '../product';

export abstract class RepositorioProduct {

  abstract async deleteProduct(id: string): Promise<boolean>;
  abstract async addProduct(producto: Product): Promise<boolean>;
}

