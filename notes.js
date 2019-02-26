console.log('Starting notes.js');

//requiring, using 3d party modules, restarting app with nodemon, getting input form user!
/*module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.add = (a, b) => {
    return a+b;
};
*/

//simplified input with yargs
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var notesString = fs.readFileSync('notes-data.json');
notes = JSON.parse(notesString);

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
        var notes = fetchNotes();
        var note = [];
        var note = {
            title,
            body
        };
 var duplicateNotes = notes.filter((note) => note.title === title);

 if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
 }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
     // console.log('Removing note', title);
    var notes = fetchNotes ();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

varLogNote = (note) => {
    debugger;
//break on this line and use repl to output note
//use read command with --title
    console.log('--');
    console.log(`Title' ${note.title}`);
    console.log(`Body: ${note.body}`);
};
module.exports = { 
    addNote,
    getAll,
    getNote,
    removeNote
};