import { Router } from "express";
import { OperationController } from "../controllers/index";
class OperationRouter {
  router: Router = Router();
  constructor() {
    this.routers();
  }
  routers = (): void => {
    this.router
      .route("/operations/:type/:id")
      .put(OperationController.transaction);
  };
}
export default new OperationRouter().router;
