const { passForgotten } = require("../middleware/index");
const controller = require("../controllers/pass.controller");

module.exports = function (app) {
  app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  /* send reset password link in email */
  app.post(
    "/reset-password-email",
    [passForgotten.checkUserRegistered],
    controller.resetPasswordEmail
  );

  /* reset password */
  app.post(
    "/update-password",
    [passForgotten.checkToken],
    controller.updatePassword
  );
};
