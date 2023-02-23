const db = require("../models");
const User = db.user;
const randtoken = require("rand-token");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const Op = db.Sequelize.Op;

/* send reset password link in email */
exports.resetPasswordEmail = async (req, res) => {
  var email = req.body.email;

  try {
    // Email
    var user = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(user);

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var token = randtoken.generate(20);
    var sent = sendEmail(email, token);

    if (sent != "0") {
      var data = {
        token: token,
      };

      user.token = token;
      await user.save();
      return res.send({
        type: "success",
        message: "The reset password link has been sent to your email address",
      });
    } else {
      return res.send({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Couldn't validate username!",
      error: error.message,
    });
  }
};

/* reset password */
exports.updatePassword = async (req, res) => {
  var token = req.body.token;
  var password = bcrypt.hashSync(req.body.password, 8);

  try {
    // Token
    var user = await User.findOne({
      where: {
        token: token,
      },
    });
    console.log(user);

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    user.password = password;
    user.token = null;
    await user.save();

    res.send({
      type: "success",
      message: "Your password has been updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Couldn't validate token!",
      error: error.message,
    });
  }
};

function sendEmail(email, token) {
  var email = email;
  var token = token;

  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "becode.film.friendzy@gmail.com", // Your email id
      pass: "hetknczjzzbvdngr", // Your password
    },
  });

  var mailOptions = {
    from: "becode.film.friendzy@gmail.com",
    to: email,
    subject: "Reset Password",
    html:
      '<h3>Dear FilmFriend,</h3><br><p>Your request for a new password is valid, please use this <a href="http://localhost:4000/reset-password?token=' +
      token +
      '">link</a> to reset your password.</p>',
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
}
