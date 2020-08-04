import { Schema, model, Document } from "mongoose";

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
}

const schema = new Schema({
  nombre: String,
  apellido: String,
  dni: String,
  clave: String,
  saldo: Schema.Types.Mixed,
  cuenta: String,
});

export default model<IUser>("User", schema);
