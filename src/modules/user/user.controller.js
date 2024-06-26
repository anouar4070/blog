import { userModel } from "../../../models/user.model.js"


const signUp = async(req, res) => {

  const {  name, email, password} = req.body;

const user = await userModel.findOne({ email});
if(user) {
  return res.json({ 
    message: "user already exists"
  });
  } else {
    await userModel.insertMany({  name, email, password});
    res.json({ message: "User created successfully"});
  }

};

export { signUp };

