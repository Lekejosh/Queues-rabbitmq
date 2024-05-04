import { Request, Response } from "express";
import response from "../utils/response";
import queue from "../helper/amqp";
export default class Register {
  static async regis(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const data = { name: name, email: email };
      queue.publish("new_user", JSON.stringify(data));
      return response.success("Success send email", res, true);
    } catch (error) {
      return response.error("Error sending email", res, "EMAIL_NOT_SENT");
    }
  }
}
