import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { env } from "../config";
import User from "../models/User";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.jwtSecret,
};

export default new Strategy(opts, async (payload, done) => {
  const user = await User.findById(payload.id).select("id");
  if (user) return done(null, user);
  return done(null, {});
});
