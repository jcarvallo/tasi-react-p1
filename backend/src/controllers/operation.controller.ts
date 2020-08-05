import { Request, Response } from "express";
import { OperationService } from "../services/index";

class OperationController {
  async transaction(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    let { id, type } = req.params;
    let result = await OperationService.transaction(id, type, req.body);
    if (result) {
      return res.json(result);
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new OperationController();
