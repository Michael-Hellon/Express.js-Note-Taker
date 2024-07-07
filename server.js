const express = require('express');
const path = require('path');
const fs = require("fs");

const PORT = process.env.port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// get route for index page / landing page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);



// should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

// receive a new note to save on the request body
app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  let noteList = JSON.parse(fs.readFileSync('/db/db.json'));
  let notesLength = (noteList.length).toString();

  // creates unique new id for each json obj
  newNote.id = notesLength;
  // pushes new note to db.json
  noteList.push(newNote);

  // write the new data to the db.json
  fs.writeFileSync('/db/db.json', JSON.stringify(noteList));
  res.json(noteList);
});

// GET Route for homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
