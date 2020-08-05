import User, { ISaldo } from "../models/User";

class OperationService {
  async transaction(id: string, type: string, saldo: ISaldo) {
    try {
      let query = await User.findOne({ _id: id });
      if (query) {
        await query?.updateOne({ saldo: saldo });
        let operation = await User.findById(id);
        return {
          message: `Su ${type} de monto $${operation?.saldo?.formateado}<br/> 
                    en la cuenta ${operation?.cuenta}<br/> 
                    fue realizado con éxito.`,
        };
      } else {
        throw query;
      }
    } catch (e) {
      return e;
    }
  }
}
export default new OperationService();
