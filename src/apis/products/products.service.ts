import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';

@Injectable()
export class ProductsService {
  constructor(private readonly rabbitMQService: RabbitmqService) {}
  create(createProductDto: CreateProductDto) {
    console.log('createProductDto', createProductDto);
    this.rabbitMQService.sendMessage('products');
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
