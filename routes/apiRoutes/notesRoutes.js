const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// Gets all Notes
router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

// Add Note
router.post('/notes', (req,res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    const results = createNewNote(req.body, notes);
    res.json(results);
});

// // Delete Record
// router.delete('/notes/:id', (req,res) => {
//     if(notes.length <= req.params.id) {
//         res.statusCode = 404;
//         return res.send('Error 404: No quote found');
//     }
    
//     notes.splice(req.params.id, 1);
    
// });

module.exports = router;