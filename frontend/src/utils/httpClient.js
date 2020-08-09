import config from "./httpConfig";

const httpClient = {
  get: async (request) => {
    let { url, params } = request;
    return await config.get(`${url}`, { params: params ? params : {} });
  },
  post: async (request) => {
    let { url, data, auth } = request;
    let method = "POST";
    return (await auth)
      ? config({ method, url, data: {}, auth })
      : config({ method, url, data });
  },
  put: async (request) => {
    let { url, data } = request;
    return await config({ method: "PUT", url, data });
  },
  delete: async (request) => {
    return await config.delete(`${request.url}`);
  },
};

export default httpClient;
