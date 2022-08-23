const express = require('express')
const { storeUserData } = require('../controller/userController')


const route = express.Router()

route.post('/userDetails', storeUserData)

module.exports =route