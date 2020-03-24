export class Product {

  private _urlImage: string;
  private _name: string;
  private _coste: number;

  constructor(urlImage: string, name: string, coste: number) {
    this._urlImage = urlImage;
    this._name = name;
    this._coste = coste;
  }

  getUrlImage(): string {
    return this._urlImage;
  }

  getName(): string {
    return this._name;
  }
  
  getCoste(): number {
    return this._coste;
  }
}