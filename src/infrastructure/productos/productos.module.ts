import { Module } from '@nestjs/common';
import { ProductosControlador } from './productos.controlador';

@Module({
  controllers: [ ProductosControlador ],
})
export class ProductosModule {};