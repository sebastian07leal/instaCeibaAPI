import { 
  Controller, Get, Post, Put, Delete, Param, Body, Res
} from '@nestjs/common';

import { Listed } from 'src/application/userCount/useCase/listed';


@Controller('product/')
export class ProductController {

  constructor(private ref: Listed) {}

  @Get()
  getInventory(): any {
    return this.ref.getAll();
  }

  @Post()
  createCosito(product: any): any {
    return this.ref.createListed(product);
  }



}