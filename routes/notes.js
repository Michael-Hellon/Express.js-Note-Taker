const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// get all notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => {
    res.json(JSON.parse(data));

   });
});

// POST the note(s)
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json('Note added Successfully!!!');
  } else {
    res.error('Error in adding Note!')
  }
});

// delete a note
notes.delete('/:id', async (req, res) => {
  let notes = JSON.parse(await readFromFile('db/db.json'))
  let remainingNotes = notes.filter(noteEntry => noteEntry.id !== req.params.id);
  writeToFile('db/db.json', remainingNotes);
  res.json(remainingNotes);
})

module.exports = notes;