import MailService from "../service/mail.service";
import { connectToRabbitMQ } from "../utils/rabbit";

interface User {
  name: string;
  email: string;
}

class RabbitQueue {
  public async listen(queue: string) {
    try {
      const connection = await connectToRabbitMQ();
      const channel = await connection.createChannel();
      await channel.assertQueue(queue);

      console.log(`[*] Waiting for messages in ${queue}.`);

      channel.consume(queue, async (msg) => {
        if (msg) {
          const message = msg.content.toString();
          console.log(` [x] Received message: ${message}`);
          const data: User = JSON.parse(message);
          await new MailService().sendMail(data.email, data.name);
          channel.ack(msg);
        }
      });
    } catch (error) {
      console.error("Error in listen function:", error);
    }
  }
}

export default new RabbitQueue();
