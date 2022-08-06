const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId // for reference to other if any 

const userSchema = new mongoose.Schema({

    nickName :{
        type:String
    },

    questions:{


        struggleTime:{
            type:String,
            required:true,
            default:null


        },

        bedTime:{

            type:String,
            required:true,
            default:null
            
        },


        wakeUpTime:{

            type:String,
            required:true,
            default:null

        },
        sleepHours:{

            type:String,
            required:true,
            default:null

        }

    }

},{timeStamps:true})



module.exports = mongoose.model("user",userSchema)


