import { Router } from "express";
import { AuthenticationController } from "../controllers/index";
class AuthenticationRouter {
  router: Router = Router();
  constructor() {
    this.routers();
  }
  routers = (): void => {
    this.router
      .route("/authentication")
      .post(AuthenticationController.authentication);
  };
}
export default new AuthenticationRouter().router;
