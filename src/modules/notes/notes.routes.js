import express from 'express';
import { addNote, deleteNote, getAllNotes, getUserNotes, updateNote } from './notes.controller.js';
import  { auth }  from '../../middleware/auth.js';

const notesRouter = express.Router()

notesRouter.post('/',auth, addNote);
notesRouter.put('/',auth, updateNote);
notesRouter.delete('/',auth, deleteNote);
notesRouter.get('/',auth, getAllNotes);
notesRouter.get('/:createdBy',auth, getUserNotes);

export default notesRouter;