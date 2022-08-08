const userModel = require("../Models/userModel");

const userDetails = async function (req, res) {
  let data = req.body;

  let { nickName, questions } = data;
 

  let DataForDb = {
    nickName: nickName,
    questions: {
      struggleTime: questions.struggleTime,
      bedTime: questions.bedTime,
      wakeUpTime: questions.wakeUpTime,
      sleepHours: questions.sleepHours,
    },
  };

  let createdData = await userModel.create(DataForDb);

  res.send(createdData);
};


module.exports ={ userDetails}
