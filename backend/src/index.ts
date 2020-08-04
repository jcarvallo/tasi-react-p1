import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { userRoutes, operationRoutes } from "./routes/index";
import { startConnection } from "./database";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.router();
  }
  private config(): void {
    //setting
    this.app.set("port", process.env.port || 5000);
    //middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    //store public file
    this.app.use("/public", express.static(path.resolve("public")));
  }
  private router(): void {
    this.app.use("/api", userRoutes);
    this.app.use("/api", operationRoutes);
  }
  async start() {
    startConnection();
    await this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
