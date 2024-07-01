import { userModel } from "../../../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const signUp = async(req, res) => {

  const {  name, email, password} = req.body;

const user = await userModel.findOne({ email});
if(user) {
  return res.json({ 
    message: "user already exists"
  });
  } else {
    const hash = bcrypt.hashSync(password, 8)
    await userModel.insertMany({  name, email, password:hash});
    res.json({ message: "User created successfully"});
  }

};


const signIn = async(req, res) => {
 const { email, password} = req.body;
const user = await userModel.findOne({ email});
if(user && bcrypt.compareSync(password, user.password)) {
  let TOKEN = jwt.sign({ id: user.id, name:user.name}, 'myNameIsAnouar')
  res.json({ message: "login with token", TOKEN  });
  // res.json({ message: "login with token", role:"user" });
} 
 else {
   res.json({ message: "User not found or password is wrong"});
  }

};


export { signUp, signIn };

