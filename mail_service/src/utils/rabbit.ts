import * as amqp from "amqplib";
import { RABBITMQ } from "../config";

let connection: amqp.Connection | null = null;

export async function connectToRabbitMQ(): Promise<amqp.Connection> {
  try {
    if (!connection) {
      connection = await amqp.connect(RABBITMQ!);
      console.log("Rabbit MQ Connected");
    }
    return connection;
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
    throw error;
  }
}
