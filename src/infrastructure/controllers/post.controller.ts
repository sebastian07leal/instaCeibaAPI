import { 
  Controller, 
  Get,
  Post,
  Put,
  Delete, 
  Param, 
  Body, 
  Res,
  HttpStatus
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
  async getInventory(@Res() req): Promise<any> {
    const res = await this.getAllUser.listedUser();
    return req.status(HttpStatus.OK).json(res);
  }

  @Post()
  async createUserCount(@Body() userCount: UserCommand, @Res() req): Promise<any> {


    console.log('Desde Post en el body')
    console.log(userCount);

    const post = await this.createUser.handle(userCount);
    return req.status(HttpStatus.CREATED).json(post);
  }

  @Delete(':idUser')
  async deleteUserCount(@Param('idUser') idUserCount: string, @Res() req): Promise<any> {
    const post = await this.removeUser.deleteser(idUserCount); 
    return req.status(HttpStatus.OK).json(post);
  }

  @Put(':idCount')
  async updateUserCount(
    @Param('idCount') idCount: string,
    @Body() inventory: any,
    @Res() req
     ): Promise<any> {
    
    const post = await this.updateUser.updateUserCount(idCount, inventory); 
    return req.status(HttpStatus.OK).json(post);
  }



}