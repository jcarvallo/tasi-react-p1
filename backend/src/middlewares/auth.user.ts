import { BasicStrategy } from "passport-http";
import User from "../models/User";

export const authUser = new BasicStrategy(async (username, password, done) => {

  const query = await User.findOne({ dni: username });
  if (!query) return done(null, {});

  let valido = await query.validarClave(password);
  if (!valido) return done(null, {});

  let user = await User.findById(query.id).select("-dni -clave");
  return done(null, user);
});
