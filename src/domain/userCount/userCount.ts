import { Product } from '../products/product';

export class UserCount {

  private name: string;
  private cash: number;
  private productUse?: Product[];

  constructor(_cash: number, _name: string, _products: Product[]) {
    this.cash = _cash;
    this.name = _name;
    this.productUse = _products;
  }

}