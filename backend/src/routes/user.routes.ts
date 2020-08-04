import { Router } from "express";
import { UserController } from "../controllers/index";

class UserRoutes {
  router: Router = Router();
  constructor() {
    this.routers()
  }
  routers():void{
    this.router
      .route("/users")
      .get(UserController.getAll)
      .post(UserController.create);

    this.router
      .route("/users/:id")
      .get(UserController.getById)
      .put(UserController.update)
      .delete(UserController.delete);
  }
}

export default new UserRoutes().router
