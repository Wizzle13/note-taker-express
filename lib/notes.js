const fs = require('fs');
const path = require('path');

function createNewNote(body,noteArray) {
    const notes = body;
    noteArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return notes;
}

module.exports = {
    createNewNote
  };