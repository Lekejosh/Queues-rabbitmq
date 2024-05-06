import { connectToRabbitMQ } from "../utils/rabbit";

class Queue {
  public async publish(queue: string, message: string) {
    const connection = await connectToRabbitMQ();
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(" [x] Published message RabbitMQ!'");
  }
}

export default new Queue();
