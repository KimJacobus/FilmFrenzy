const db = require("../models");
const User = db.user;

/* check user is registered by its email */
checkUserRegistered = async (req, res, next) => {
  var email = req.body.email;

  //console.log(sendEmail(email, fullUrl));
  try {
    // Email
    var user = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (!user) {
      return res.status(400).send({
        type: "error",
        message: "The Email is not registered with us.",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Couldn't validate email!",
      error: error.message,
    });
  }
};

/* check token */
checkToken = async (req, res, next) => {
  var token = req.body.token;

  try {
    // token
    var user = await User.findOne({
      where: {
        token: token,
      },
    });
    console.log(user);
    if (!user) {
      return res.status(400).send({
        type: "error",
        message: "The token is incorrect.",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Couldn't validate token!",
      error: error.message,
    });
  }
};

const passForgotten = {
  checkUserRegistered,
  checkToken,
};

module.exports = passForgotten;
