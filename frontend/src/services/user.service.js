import axios from "axios";

export default class UserService {
  api = process.env.REACT_APP_API_USERS;
  async getUsers() {
    return await axios.get(`${this.api}users`);
  }
  async transaccion(id, type, data) {
    return await axios({
      method: "PUT",
      url: `${this.api}operations/${type}/${id}`,
      data,
    });
  }
}
