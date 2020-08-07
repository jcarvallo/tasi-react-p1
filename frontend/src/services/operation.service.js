import axios from "axios";

export default class OperationService {
  api = process.env.REACT_APP_API_USERS;
  async transaccion(id, type, data) {
    return await axios({
      method: "PUT",
      url: `${this.api}operations/${type}/${id}`,
      data,
    });
  }
}
