import { 
  Controller, 
  Get,
  Post,
  Put,
  Delete, 
  Param, 
  Body, 
  Res
} from '@nestjs/common';
import { UserCommand } from 'src/application/command/user.command';
import { Listed } from 'src/application/userPost/useCase/listed';
import { AddInventory } from 'src/application/userPost/useCase/addInventory';
import { RemoveUser } from 'src/application/userPost/useCase/removeUser';
import { UpdateUser } from 'src/application/userPost/useCase/updateUser';

@Controller('usercount/')
export class PostControler {

  constructor(
    private getAllUser: Listed,
    private createUser: AddInventory,
    private removeUser: RemoveUser,
    private updateUser: UpdateUser,
    ) {}


  @Get()
  async getInventory(): Promise<any> {
    return await this.getAllUser.listedUser();
  }

  @Post()
  async createUserCount(@Body() userCount: UserCommand): Promise<any> {
    return await this.createUser.handle(userCount);
  }

  @Delete(':idUser')
  async deleteUserCount(@Param('idUser') idUserCount: string): Promise<any> {
    return await this.removeUser.deleteser(idUserCount);
  }

  @Put(':idCount')
  async updateUserCount(
    @Param('idCount') idCount: string,
    @Body() inventory: UserCommand
     ): Promise<any> {
    return await this.updateUser.updateUserCount(idCount, inventory);
  }



}