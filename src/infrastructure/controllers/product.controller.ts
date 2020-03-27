import { 
  Controller, Get, Post, Put, Delete, Param, Body, Res
} from '@nestjs/common';

import { Listed } from 'src/application/userCount/useCase/listed';
import { AddInventory } from 'src/application/userCount/useCase/addInventory';
import { UserCommand } from 'src/application/command/user.command';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('usercount/')
export class UserController {

  constructor(
    private getAllUser: Listed,
    private createUser: AddInventory
    ) {}


  @Get()
  getInventory(): any {
    return this.getAllUser.getAll();
  }

  @Post()
  async createUserCount(@Body() userCount: UserCommand): Promise<any> {
    return await this.createUser.handle(userCount);
  }



}