const express = require('express')

const route = express.Router()


route.get('/testMe', function(req,res){
    res.send("all  is well ")
})





















module.exports =route