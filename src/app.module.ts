import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqService } from './apis/rabbitmq/rabbitmq.service';
import { ProductsModule } from './apis/products/products.module';
import { RabbitmqController } from './apis/rabbitmq/rabbitmq.controller';
import { RabbitmqModule } from './apis/rabbitmq/rabbitmq.module';

@Module({
  imports: [ProductsModule, RabbitmqModule],
  controllers: [AppController, RabbitmqController],
  providers: [AppService, RabbitmqService],
})
export class AppModule {}
