import User from "../models/User";

class AuthenticationService {
  async authentication(data: any) {
    try {
        let user = await User.find()
          .where({ dni: data.dni })
          .where({ clave: data.clave });
        if (user.length > 0) {
          return { user: user[0] };
        } else {
           throw null
        }
    } catch (e) {
        return e
    }
  }
}
export default new AuthenticationService();
