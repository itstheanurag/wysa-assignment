const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId // for reference to other if any 

const userSchema = new mongoose.Schema({

    nickName :{
        type:String
    },

    questions:{
        type:Object,


        struggleTime:{
            type:String,  // < 2 weeks    2--8 weeks   8 weeks >
            required:true,
            default:null


        },

        bedTime:{

            type:Number, // 24 hours system 
            required:true,
            default:null
            
        },


        wakeUpTime:{

            type:Number,
            required:true,
            default:null

        },
        sleepHours:{  // ideally 1-10 

            type:Number,
            required:true,
            default:null

        }

    }


    // can add more fileds as per the requirement 


},{timeStamps:true})



module.exports = mongoose.model("user",userSchema)


