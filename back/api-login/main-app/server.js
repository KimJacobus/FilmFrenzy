const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
require("dotenv").config();
//import swaggerDocs from "./app/utils/swagger";

const app = express();

app.use(cors());

const db = require("./app/models");
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}

db.sequelize.sync({force: true}).then(() => {
  console.log("Resync Db");
  initial();
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "filmFriendzy-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/pass.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  //swaggerDocs(app, PORT);
});
