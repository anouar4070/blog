import mongoose  from "mongoose";

export function dbConnection() {
mongoose
.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>{
  console.log("database connected");
})
.catch((err)=> {
  console.log("database error", err);
});
}