const user = require("../Models/userModel");

const storeUserData = async function (req, res) {
  try {
    let data = req.body;
    let { nickName, questions } = data;
    let userData = {
      nickName: nickName,
      questions: {
        struggleTime: questions.struggleTime,
        bedTime: questions.bedTime,
        wakeUpTime: questions.wakeUpTime,
        sleepHours: questions.sleepHours,
      },
    };
    let createdData = await user.create(userData);
    return res.status(201).send({status : true, data :createdData})
  }
  catch(err){
    console.log(err)
  }
};


module.exports = { storeUserData }
