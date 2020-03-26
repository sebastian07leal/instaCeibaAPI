import { 
  Controller, Get, Post, Put, Delete, Param, Body, Res
} from '@nestjs/common';

import { testService } from './test.service';

// import { Listed } from 'src/application/userCount/useCase/listed';

@Controller('product/')
export class ProductController {

  // constructor( private getInventory: Listed) {
  // }

  constructor( private ref: testService) {

  }

  @Get()
  hola(): string {
    return 'hola'
  }

  @Get('.id')
  ho() {
    return this.ref.hi();
  }

  // @Get()
  // async getAll(): Promise<any> {

  //   console.debug('ESTOY EN CONTROLADOR, LLAMNDO APLICACION')

  //   return await this.getInventory.listedInventory();
  // }

  // @Get(':id')
  // getProduct(@Param('id') idProduct: string): string {
  //   return `Este es el produto`;
  // } 

  // @Post()
  // createProduct(): string {
  //   return `Creando producto`;
  // }

  // @Put()
  // updateProduct(): string {
  //   return `Actualizando producto`;
  // }

  // @Delete(':id')
  // deleteProduct(@Param('id') idProduct: string): string {
  //   return `Borrando producto`
  // }




}