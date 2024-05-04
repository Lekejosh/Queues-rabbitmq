import { Server } from "./bin/app";
const server = new Server();

import "./utils/rabbit";
server.listen((port: number) => {
  console.log(`Server is listening on port: ${port} 🚀`);
});
