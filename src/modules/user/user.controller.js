import { userModel } from "../../../models/user.model.js"


const signUp = async(req, res) => {

  const {  name, email, password} = req.body;
  await userModel.insertMany({  name, email, password});
res.json({ message: "User created successfully"});

};

export { signUp };

