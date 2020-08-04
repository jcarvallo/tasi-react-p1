import User, { ISaldo } from "../models/User";

class OperationService {
  async deposito(id: string, saldo: ISaldo) {
    await User.where(id).update({ saldo }).exec();
    let dataOperation = await User.findById(id);
    return { dataOperation, message: "Operation deposito" };
  }
  async extraccion(id: string, saldo: ISaldo) {
    await User.where(id).update({ saldo }).exec();
    let dataOperation = await User.findById(id);
    return { dataOperation, message: "Operation extraccion" };
  }
}
export default new OperationService();
