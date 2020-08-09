import { Router } from "express";
import passport from "passport";
import { OperationController } from "../controllers/index";
class OperationRouter {
  router: Router = Router();
  constructor() {
    this.routers();
  }
  routers = (): void => {
    this.router
      .route("/operations/:type")
      .put(
        passport.authenticate("jwt", { session: false }),
        OperationController.transaction
      );
  };
}
export default new OperationRouter().router;
