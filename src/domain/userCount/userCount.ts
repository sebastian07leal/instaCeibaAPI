import { Product } from '../products/product';

export class UserCount {

  private _cash: number;
  private _nameUser: string;
  private _productUse?: Product[];

  constructor(cash: number, name: string, products: Product[]) {
    this._cash = cash;
    this._nameUser = name;
    this._productUse = products;
  }

  getCash(): number {
    return this._cash;
  }

  getNameUser(): string {
    return this._nameUser;
  }

  getProducUser(): Product[] {
    return this._productUse;
  }

}