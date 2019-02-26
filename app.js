console.log('Starting app.js');

const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const bodyOptions = {
    describe : 'Title of note',
    demand : true,
    alias: 'b'
};
const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOption
})
.command('List','List of note')
.command('Read','Read a note', {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    },
})
.command('remove','Remove a note', {
    title: titleOptions
})
.help()
.argv;
var commmand = argv._[0];

//var command = process.argv[2];
//console.log('Command: ', command);
//console.log('Yargs', argv);

//section intro, using require, requirinng your own files, 
//using 3rd party modules, restarting app with nodemon, getting input form user!"
/*if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognize');
}*/

if (command === 'add') {
// cek di terminal dengan ketikkan kode berikut "node app.js list"
    //var note = notes.addNotes(argv.title, argv.body);
    if (note){
        console.log('Note created');
        notes.logNotes(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {    
    notes.getAll();
} else if (command === 'read') {
// ketik "node app.js read --title accounts"
   var note =  notes.getNote(argv.title);
   if (note) {
        console.log('Note found');
        console.logNotes('--');
        console.log(`Title: ${note-title}`);
        console.log(`Body: ${note-body}`);
   } else {
       console.log('Note not found');
   }
} else if (command === 'remove') {
//krtik "node appjs remove --title accounts"
   var notRemoved =  notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
} else {
    console.log('Command not recognize');
}
