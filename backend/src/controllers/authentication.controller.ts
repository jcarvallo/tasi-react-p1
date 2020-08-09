import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import { creteToken } from "../helpers";

class AuthenticationController {
  async authentication(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    let { user }: any = req;
    if (Object.values(user).length > 0) {    
      let query = await User.findOne({ _id: user._id }).select("id dni") as IUser;
      let token = creteToken(query)
      return res.json({user , token});
    } else {
      return res
        .status(400)
        .json({ error: "Datos incorrectos <br/> Intentelo nuevamente." });
    }
  }
}

export default new AuthenticationController();
