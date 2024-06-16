//   // get notes from db and render
//   fs.readFile(path.join(__dirname,dbPath), 'utf8', (err, data) => {
//     if( err ) return res.status(500).json({status: "error", body: 'Error reading database'});
//     const database = JSON.parse(data);
//     res.json(database);
//   });