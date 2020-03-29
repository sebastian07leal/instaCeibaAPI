import { UserCount } from '../../userCount/userCount';

export interface RepositoryUserCount {

  addToInventory( product: UserCount ): Promise<any>;

  listedInventory(): Promise<any>;

  deleteUserInventory(idUser: string): Promise<any>;

  putUserInventory(idUserCount: string, count: UserCount): Promise<any>;

}