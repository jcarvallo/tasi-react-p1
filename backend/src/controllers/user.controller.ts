import { Request, Response } from "express";
import { UserService } from "../services/index";

class UserController {
  async getAll(req: Request, res: Response): Promise<Response> {
    const users = await UserService.getAllUsers();
    return res.json(users);
  }
  async getById(req: Request, res: Response): Promise<Response> {
    let user = await UserService.getByIdUser(req.params.id);
    return await res.json(user);
  }
  async create(req: Request, res: Response): Promise<Response> {
    let result = await UserService.createUser(req.body);
    return res.json(result);
  } 
  async update(req: Request, res: Response): Promise<Response> {
    let result = await UserService.updateUser(req.params.id, req.body);
    return res.json(result);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    let result = await UserService.deleteUser(req.params.id);
    return res.json(result);
  }
}

export default new UserController();
