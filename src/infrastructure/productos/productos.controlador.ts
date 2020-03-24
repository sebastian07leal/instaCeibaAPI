import { Controller, Get, Delete, Res, Param } from '@nestjs/common';

@Controller('productos')
export class ProductosControlador {

  constructor(){
  }

  @Get()
  getAll(): string {
    return 'Retornando producto del inventario';
  }

  @Delete(':id')
  deleteId(@Param('id') id: string): string {
    return `Estoy borrando el producto con el id: ${id}`;
  }


}