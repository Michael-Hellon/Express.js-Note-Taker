const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// get routes for retrieving all notes
notes.get('/', (req, res) => {
    readFromFile('.db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) =>{
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json('Note added Successfully!!!');
  } else {
    res.error('Error in adding Note!')
  }
});

// DELETE to remove a post - BONUS ROUND!!!! 
// modeled after problem 16
// app.delete('/api/notes/:id', (req, res) => {
//   /// need to add code here
//   const {note_id } = req.params;

//   if(!note_id) {
//     return res.status(400).send('Note ID not found!');
//   }
//   console.log(`${req.method} request received to get a single note`);

//   const req_ID = req.params.id;



// })



module.exports = notes;