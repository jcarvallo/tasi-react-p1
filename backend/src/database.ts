import { connect } from "mongoose";
import { env } from "./config";

export async function startConnection() {
  await connect(env.DB.URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log("Datebase is connected");
    }
  );
}
