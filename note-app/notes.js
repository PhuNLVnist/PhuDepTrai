const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Your note ...'
}

const addNote = function(title,body){
    const notes = loadNotes()

    const check = notes.filter(function(notes){
        return notes.title === title
    })
    
    if (check.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        console.log('Title: ', title)
        console.log('Body: ', body)
        console.log('Add a new note!')
    
        saveNotes(notes)
    }else{
        console.log('The title is taken!')
    }
}
 

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    return fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const check = notes.filter(function(notes){
        return notes.title !== title
    })
    if (notes.length > check.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(check)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
} 