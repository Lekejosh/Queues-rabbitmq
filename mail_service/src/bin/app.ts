import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { createServer, Server as HTTPServer } from "http";
import { PORT } from "../config";
import { connectToRabbitMQ } from "../utils/rabbit";
export class Server {
  private httpServer!: HTTPServer;
  private app!: Application;
  private readonly PORT = parseInt(PORT);

  constructor() {
    this.initalize();
  }

  private initalize(): void {
    this.app = express();
    (this.httpServer = createServer(this.app)), this.configureRoutes();
  }

  private configureRoutes(): void {
    this.app.get("/check", (req: Request, res: Response) => {
      res.status(200).json({
        success: true,
        status: "UP!",
      });
    });
  }
  public listen(callback: (port: number) => void): void {
    connectToRabbitMQ();
    this.httpServer.listen(this.PORT, () => {
      callback(this.PORT);
    });
  }
}
