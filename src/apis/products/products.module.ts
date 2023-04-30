import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, RabbitmqService],
})
export class ProductsModule {}
