import axios from "axios";

class AuthenticationService {
  api = process.env.REACT_APP_API_USERS;
  async authentication(data) {
    return await axios({
      method: "POST",
      url: `${this.api}authentication`,
      data,
    });
  }
}

export default AuthenticationService;
