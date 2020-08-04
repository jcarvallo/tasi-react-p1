import { connect } from "mongoose";

export async function startConnection() {
  await connect(
    "mongodb://localhost/tasi-user-db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false
    },()=>{
      console.log('Datebase is connected');
    }
  );
  
}


