import { Register } from "../@types/auth";
import redisPubSub from "../helper/redisPubSub";

class auth {
  async register(data: Register) {
    try {
        redisPubSub.publish("newUser", JSON.stringify(data));
    } catch (error){
       throw error;
    }

    
  }
}
