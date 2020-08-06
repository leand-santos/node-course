const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Leandro'
user.age = '19'

const newUser = JSON.stringify(user)
fs.writeFileSync('1-json.json', newUser)
