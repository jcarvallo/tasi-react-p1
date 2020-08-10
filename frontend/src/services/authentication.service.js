import { httpClient } from "../utils";

const authenticationService = {
  authentication: async (auth) => {
    let request = { auth, url: "authentication" };
    return await httpClient.post(request);
  },
};

export default authenticationService;
