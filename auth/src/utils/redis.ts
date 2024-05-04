import { createClient } from "redis";
import { REDIS } from "../config";
import ms from "ms";

const client = createClient({
  url: REDIS!,
  pingInterval: ms("12h"),
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 5) {
        console.log("Too many retries on REDIS. Connection Terminated");
        return new Error("Too many retries.");
      } else {
        return retries;
      }
    },
  },
});

client.on("connect", () => console.log(":::> Connected to Redis database"));
client.on("error", (err) => console.log("Redis connection Error", err));
client.on("disconnect", () =>
  console.log(":::> Disconnected to Redis database")
);

export default client;
