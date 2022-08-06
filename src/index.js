const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const route = require('./Route/router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




mongoose.connect("mongodb+srv://sonu517825:m0ww1dng9uqrz0ge@cluster0.wgtiy.mongodb.net/WysaSleepApp?retryWrites=true&w=majority" , {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route)


app.listen(process.env.PORT||3000,function(){
    console.log(" app is running on port 3000")
}
    
)














