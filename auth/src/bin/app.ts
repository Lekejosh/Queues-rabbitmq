import 'dotenv/config'
import express, { Application, Request, Response } from "express";
import { createServer, Server as HTTPServer } from "http";
import parser from "body-parser";
import { PORT } from "../config";
import router from "../route";

export class Server {
  private httpServer!: HTTPServer;
  private app!: Application;
  private readonly PORT = parseInt(PORT);

  constructor() {
    this.initalize();
  }

  private initalize(): void {
    this.app = express();
    (this.httpServer = createServer(this.app)), this.configureApp();
    this.configureRoutes();
  }

  private configureApp(): void {
    this.app.use(parser.json());
  }

  private configureRoutes(): void {
    this.app.get("/check", (req: Request, res: Response) => {
      res.status(200).json({
        success: true,
        status: "UP!",
      });
    });

    this.app.use("/", router);
  }
  
  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.PORT, () => {
      callback(this.PORT);
    });
  }
}
