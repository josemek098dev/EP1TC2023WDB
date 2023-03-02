// Requiring NPM
require("dotenv").config(); // has to be required as first of all
const express = require("express"); // should be required as second one
const bodyParser = require("body-parser");
const ejs = require("ejs"); // has to be installed, but doesn't necessarily need to be required
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// const passportLocal = require("passport-local"); has to be installed, but doesn't need to be required
 
// Set up express
const app = express();
 
// Set up PORT
const PORT = process.env.PORT || 4000;
 
// Set up static folder
app.use(express.static(__dirname + "/public"));
 
// Set up EJS
app.set("view engine", "ejs");
 
// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
 
// Set up express-session
app.use(
  session({
    secret: "Secret.",
    resave: false,
    saveUninitialized: false
  })
);
 
// Set up passport
app.use(passport.initialize());
app.use(passport.session());
 
// Connecting mongoose to a database
mongoose.set("strictQuery", true); // Avoids warnings in terminal
mongoose.connect("mongodb://127.0.0.1:27017/userDB");
 
// Creating mongoose schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
 
userSchema.plugin(passportLocalMongoose);
 
const User = mongoose.model("User", userSchema);
 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
// Home route
app.route("/").get((req, res) => {
  res.render("home");
});
 
// Register route
app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.register({ username: username }, password, (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    });
  });
 
// Login route
app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
    req.login(user, (err) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    });
  });
 
// Secrets route
app.route("/secrets").get((req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/");
  }
});
 
// Logout route
app.route("/logout").post((req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/");
    }
  });
});
 
// Set up server
app.listen(PORT, () => {
  console.log("Server is runnig on port " + PORT + ".");
});

