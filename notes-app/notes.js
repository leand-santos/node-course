const fs = require('fs')
const chalk = require('chalk')

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(
        (note) => note.title == title
    )

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
    } else {
        console.log(chalk.red('Note title taken'))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(
        (note) => note.title != title
    )
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed'))
    } else {
        console.log(chalk.red('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow("Your notes:\n"))
    notes.forEach((note) => {
        console.log(chalk.blueBright("Title: ") + chalk.cyan(note.title))
        console.log(chalk.magentaBright("Body: ") + chalk.cyan(note.body))
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find(
        (note) => title == note.title
    )
    if(note){
        console.log(chalk.blueBright("Title: ") + chalk.cyan(note.title))
        console.log(chalk.magentaBright("Body: ") + chalk.cyan(note.body))
    } else{
        console.log(chalk.red('Note not found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}