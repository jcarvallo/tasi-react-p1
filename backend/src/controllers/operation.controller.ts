import { Request, Response } from "express";
import { OperationService } from "../services/index";

class OperationController {
  async deposito(req: Request, res: Response): Promise<Response> {
    let result = await OperationService.deposito(req.params.id, req.body);
    return res.json(result);
  }
  async extraccion(req: Request, res: Response): Promise<Response> {
    let result = await OperationService.extraccion(req.params.id, req.body);
    return res.json(result);
  }
}

export default new OperationController();
