const router = require('express').Router();

const { notes } = require('../../db/db.json');

// Gets all Notes
router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

// Add Note
router.post('/notes', (req,res) => {
    
    res.json(notes);
});

module.exports = router;