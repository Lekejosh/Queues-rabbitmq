import * as amqp from "amqplib";
import { RABBITMQ } from "../config";
export let connect:amqp.Connection;
async function connectToRabbitMQ() {
  try {
    connect = await amqp.connect(RABBITMQ!);
    console.log("Rabbit MQ Connected");
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

connectToRabbitMQ();
