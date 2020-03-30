import { UserPost } from '../userPost';

export interface RepositoryUserPost {

  addToInventory( product: UserPost ): Promise<any>;

  listedInventory(): Promise<any>;

  deleteUserInventory(idUser: string): Promise<any>;

  putUserInventory(idUserCount: string, count: UserPost): Promise<any>;

}