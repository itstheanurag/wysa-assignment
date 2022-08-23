const express = require('express')
const mongoose = require('mongoose')
const route = require('./Route/router')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))

const DB = 'mongodb+srv://itstheanurag:gaurav9878764239@cluster0.dirde.mongodb.net/wysa-assignment'
mongoose.connect(DB, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT , ()=> console.log(`app is running on port ${PORT}`))














