import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductosControlador } from './infrastructure/productos/productos.controlador';

@Module({
  imports: [],
  controllers: [AppController, ProductosControlador ],
})
export class AppModule {}
