const CustomeAPIError = require('../errors/custom-error');
const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validatioin
  //Joi
  //Check in the controller

  if (!username || !password) {
    throw new CustomeAPIError('Please provide email and password', 400);
  }
  console.log(username, password);
  res.send('Fake Login/Register/Signup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
