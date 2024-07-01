import express from 'express';
import { addNote, deleteNote, getAllNotes, getUserNotes, updateNote } from './notes.controller.js';

const notesRouter = express.Router()

notesRouter.post('/', addNote);
notesRouter.put('/', updateNote);
notesRouter.delete('/', deleteNote);
notesRouter.get('/', getAllNotes);
notesRouter.get('/:createdBy', getUserNotes);

export default notesRouter;