import jwt from "jsonwebtoken";
import { IUser } from "../models/User";
import { env } from "../config";

export const creteToken = (user: IUser) => {
  let { id, dni } = user;
  return jwt.sign({ id, dni }, env.jwtSecret, { expiresIn: 86400 });
};
