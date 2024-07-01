import { notesModel } from "./../../../models/notes.model.js";

const addNote = async (req, res) => {
  const { title, desc, createdBy } = req.body;
  await notesModel.insertMany({ title, desc, createdBy });
  res.json({ message: "Note created successfully" });
};


// const updateNote = async (req, res) => {
//   const { title, desc, id } = req.body;
//   await notesModel.updateOne({createdBy: "668188e95f393be394a4a8ef"}, {title: "new post"});
//   res.json({ message: "Note updated successfully" });
// };

const updateNote = async (req, res) => {
  const { title, desc, id } = req.body;
  let note = await notesModel.findByIdAndUpdate(id, {title, desc}, {new: true});
  if(!note) return  res.json({ message: "Note not found" });
  res.json({ message: "Note updated successfully", note });
};
// here is an example of input on Postman to use the findByIdAndUpdate method below
// {
//   "title" : "i update it !!!!",
//  "desc": "help him",
//  "id": "6681b0398f7455a78c5b756d"
// }

const deleteNote = async (req, res) => {
  const { id } = req.body;
  let note = await notesModel.findByIdAndDelete(id);
  if(!note) return  res.json({ message: "Note not found" });
  res.json({ message: "Note deleted successfully", note });
};

const getAllNotes = async (req, res) => {
 let note = await notesModel.find({}).populate('createdBy', 'name -_id' );
  res.json({ message: "success", note });
};

const getUserNotes = async (req, res) => {
  const {createdBy} = req.params;
    let note = await notesModel.find({createdBy});
    res.json({ message: "success", note });
  };

export { addNote ,updateNote ,deleteNote ,getAllNotes ,getUserNotes };
