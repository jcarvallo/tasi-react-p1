import { httpClient } from "../utils";

const operationService = {
  transaccion: async (type, data) => {
    let request = { data, url: `operations/${type}` };
    return await httpClient.put(request);
  },
};

export default operationService;
