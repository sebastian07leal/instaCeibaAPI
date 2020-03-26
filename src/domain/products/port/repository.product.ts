import { Product } from '../product';

export interface RepositorioProduct {

  getAll(): Promise<Product[]>;

  getProduct(id: string): Promise<Product>;

  createProduct(product: Product): Promise<Product>;

  updateProduct(id: string, product: Product): Promise<Product>;
  
  deleteProduct(id: string): Promise<Product>;

}

