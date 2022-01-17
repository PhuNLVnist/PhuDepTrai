const chalk = require('chalk')

//const  validator =  require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version = '1.1.0'

//add note

yargs.command({
    command:'add',
    describe: 'Add a new note.',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove note

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//list note


yargs.command({
    command: 'list',
    describe: 'List your notes', 
    handler: function(){
        notes.listNote()
    }
})

//read notes


yargs.command({
    command: 'read',
    describe: 'Read a note', 
    builder :{
        title: {
            string: 'Note title', 
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})
yargs.argv._;

