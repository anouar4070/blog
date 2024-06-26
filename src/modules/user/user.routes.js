import { signUp } from "./user.controller.js";
import  express  from 'express';

const userRouter = express.Router()


userRouter.post('/signUp', signUp)

export default userRouter;