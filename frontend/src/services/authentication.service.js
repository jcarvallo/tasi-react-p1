import { httpClient } from "../utils";

export default class AuthenticationService {
  async authentication(auth) {
    let request = { auth, url: "authentication" };
    return await httpClient.post(request);
  }
}

