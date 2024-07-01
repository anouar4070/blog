import { signIn, signUp } from "./user.controller.js";
import  express  from 'express';

const userRouter = express.Router();


userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);

export default userRouter;