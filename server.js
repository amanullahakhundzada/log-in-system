const express = require("express");
const morgan = require("morgan");
const { join } = require("path");
const validateCredentials = require("./controllers/login.controller");

const app = express();

app.use(morgan("dev"));

// parse incoming request bodies as JSON
app.use(express.json());

// point static asset requests to the ./public folder
app.use(express.static(join(__dirname, "./public")));

// home page route
app.get("/", (req, res, next) => {
  res.sendFile(join(__dirname, "./public/index.html"));
});

// login page route
app.get("/login", (req, res, next) => {
  res.sendFile(join(__dirname, "./public/login.html"));
});

// login api route for validation
app.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  // validate credentials
  let authUser = validateCredentials(username, password);

  if (authUser) {
    // send success
    res.json({ msg: "Successful login.", success: true, authUser });
  } else {
    // send error
    res
      .status(401)
      .json({ msg: "Invalid username or password.", success: false });
  }
});

app.listen(5000, () => {
  console.log("Server ready at http://localhost:5000...");
});
