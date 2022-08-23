const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    nickName :{
        type:String
    },
    questions:{
        type: Object,
        struggleTime:{
            type:String,  
            required:true,
            default:null
        },

        bedTime:{
            type:Number, 
            required:true,
        },

        wakeUpTime:{
            type:Number,
            required:true,
            default:null
        },
        sleepHours:{  
            type:Number,
            required:true,
        }
    },
    isDeleted:{
        type: Boolean,
        default:false
    }
},{timeStamps:true})

module.exports = mongoose.model("user",userSchema)


