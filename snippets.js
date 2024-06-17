//   // get notes from db and render
//   fs.readFile(path.join(__dirname,dbPath), 'utf8', (err, data) => {
//     if( err ) return res.status(500).json({status: "error", body: 'Error reading database'});
//     const database = JSON.parse(data);
//     res.json(database);
//   });


// const notesForm = getElementByClass

// gsBtn.addEventListener('click', (e) => {
//     // e.preventDefault();
//     window.location.href = 'notes.html';
//   });


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
