const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const dbPath 'db/db.json'

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

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db', 'db.json'));
  // get notes from db and render
  fs.readFile(path.join(__dirname,dbPath), 'utf8', (err, data) => {
    if( err ) return res.status(500).json({status: "error", body: 'Error reading database'});
    const database = JSON.parse(data);
    res.json(database);
  });

});




// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


