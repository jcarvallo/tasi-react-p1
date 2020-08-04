import { Router } from "express";
import { OperationController } from "../controllers/index";
class OperationRouter {
  router: Router = Router();
  constructor() {
    this.routers();
  }
  routers = (): void => {
    this.router
      .route("/operations/deposito/:id")
      .put(OperationController.deposito);
    this.router
      .route("/operations/extraccion/:id")
      .put(OperationController.extraccion);
  };
}
export default new OperationRouter().router;
