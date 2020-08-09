import { Request, Response } from "express";
import { OperationService } from "../services";

class OperationController {
  async transaction(req: Request,res: Response): Promise<Response | undefined> {
    try {
      let { user, body }: any = req;
      let { type } = req.params;
      if (Object.values(user).length > 0) {
        let result = await OperationService.transaction(user.id, type, body);
        if (result) return res.json(result);
        else throw null;
      } else throw null;
    } catch (e) {
      return res.status(400).json({ error: "Error al realizar la operación" });
    }
    
  }
}

export default new OperationController();
