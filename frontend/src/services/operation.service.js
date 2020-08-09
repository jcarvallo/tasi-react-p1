import { httpClient } from "../utils";

export default class OperationService {
  async transaccion(type, data) {
    let request = { data, url: `operations/${type}` };
    return await httpClient.put(request);
  }
}
