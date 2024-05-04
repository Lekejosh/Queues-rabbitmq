import { Server } from "./bin/app";
import queue from "./helper/amqp";
const server = new Server();
(async () => {
  try {
    await queue.listen("new_user");
    console.log("RabbitMQ listener started successfully!");
  } catch (error) {
    console.error("Error starting RabbitMQ listener:", error);
  }

  server.listen(async (port: number) => {
    console.log(`Server is listening on port: ${port} 🚀`);
  });
})();
