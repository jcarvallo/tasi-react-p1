import { Request, Response } from "express";
import { AuthenticationService } from "../services/index";

class AuthenticationController {
  async authentication(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    let result = await AuthenticationService.authentication(req.body);
    if (result) {
      return res.json(result);
    } else {
      return res.status(500).json({ error: "Datos incorrectos <br/> Intentelo nuevamente." });
    }
  }
}

export default new AuthenticationController();
