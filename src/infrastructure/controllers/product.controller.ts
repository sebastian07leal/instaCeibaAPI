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
import { Listed } from 'src/application/userCount/useCase/listed';
import { AddInventory } from 'src/application/userCount/useCase/addInventory';
import { RemoveUser } from 'src/application/userCount/useCase/removeUser';
import { UpdateUser } from 'src/application/userCount/useCase/updateUser';

@Controller('usercount/')
export class UserController {

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

    console.log(`CONTROLADOR ${inventory.title}`)
    console.log(`CONTROLADOR ${inventory.likes}`)
    console.log(`CONTROLADOR ${inventory.comment}`)
    return await this.updateUser.updateUserCount(idCount, inventory);
  }



}