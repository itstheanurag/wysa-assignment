const express = require('express')
const userController =require('../controller/userController')

const route = express.Router()


route.get('/testMe', function(req,res){
    res.send("all  is well ")
})



route.post('/userDetails',userController.userDetails)

// in stepbystep branch endpoits are diff for all questions

//git checkout stepbystep
module.exports =route