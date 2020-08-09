import { Router } from "express";
import passport from "passport";
import { AuthenticationController } from "../controllers/index";
class AuthenticationRouter {
  router: Router = Router();
  constructor() {
    this.routers();
  }
  routers = (): void => {
    this.router
      .route("/authentication")
      .post(
        passport.authenticate("basic", { session: false }),
        AuthenticationController.authentication
      );
  };
}
export default new AuthenticationRouter().router;
