import express from 'express'
import { dbConnection } from './databases/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js';
import notesRouter from './src/modules/notes/notes.routes.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use(userRouter);
app.use('/notes',notesRouter);

dbConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))