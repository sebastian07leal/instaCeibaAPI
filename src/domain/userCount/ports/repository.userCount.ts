import { UserCount } from '../../userCount/userCount';

export interface RepositoryUserCount {

  addToInventory( product: UserCount ): Promise<any>;

  listedInventory(): any;

  // updateStateCash( product: Product ): Promise<Product>;
}