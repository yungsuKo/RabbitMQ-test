import { Injectable } from '@nestjs/common';
import { connect } from 'amqp-connection-manager';

@Injectable()
export class RabbitmqService {
  private channel: any;

  constructor() {
    this.initialize();
    this.consume();
  }

  async initialize() {
    const connection = await connect('amqp://localhost');
    this.channel = await connection.createChannel();
    await this.channel.assertQueue('myQueue');
  }

  async sendMessage(message: string) {
    this.channel.sendToQueue('myQueue', Buffer.from(message));
  }

  async consumeMessages() {
    await this.channel.consume('myQueue', (message) => {
      console.log('message', message.content.toString());
      this.channel.ack(message);
    });
  }
}
