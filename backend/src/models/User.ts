import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface ISaldo {
  value: number;
  formateado: string;
}
export interface IUser extends Document {
  nombre: string;
  apellido: string;
  dni: string;
  clave: string;
  saldo: ISaldo;
  cuenta: string;
  encripClave(clave: string): Promise<string>;
  validarClave(clave: string): Promise<boolean>;
}

const userSchema = new Schema({
  nombre: String,
  apellido: String,
  dni: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  saldo: Schema.Types.Mixed,
  cuenta: String,
});

userSchema.methods.encripClave = async (clave: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

userSchema.methods.validarClave = async function (clave: string): Promise<boolean> {
  return await bcrypt.compare(clave, this.clave);
};

export default model<IUser>("User", userSchema);
