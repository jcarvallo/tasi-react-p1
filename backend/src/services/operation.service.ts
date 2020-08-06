import User from "../models/User";

interface IData {
  saldo: any;
  monto: string;
}

class OperationService {
  async transaction(id: string, type: string, data: IData) {
    try {
      let query = await User.findOne({ _id: id });
      if (query) {
        await query?.updateOne({ saldo: data.saldo });
        let operation = await User.findById(id);
        return {
          message: `Su ${type} de monto $${data.monto}<br/> 
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
