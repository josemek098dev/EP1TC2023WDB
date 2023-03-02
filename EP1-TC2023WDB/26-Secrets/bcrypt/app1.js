//jshint esversion:6
require('dotenv').config();   // npm i dotenv
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require("mongoose-encryption");
const md5 = require("md5")
const app = express();
const bcrypt = require ("bcrypt");
const saltRounds = 10;
//npm i passport passport-local passport-local-mongoose express-session

 
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
 
app.listen(3000, function() {
    console.log("Server started on port 3000.");
});


//1-MONGOOSE-CONNECT user DB-ARTICLESSCHEMA3-MODEL//

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
}
  
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

//const secret = "Thisisourlittlesecret.";

//userSchema.plugin(encrypt, {secret:process.env.SECRET, encryptedFields: ["password"]})
//la clave para desncriptar esta en el archivo .env

/*
    dentro de un archivo .gitignore agregar una linea q diga .env o buscar en git
    una lista de archivos para ignorar en node. ojo con el historial de git
*/
  
const User = mongoose.model("User", userSchema);  //con mayusculas los 2 primeros U U y 3 min u

//2- GET

app.get("/",function(req,res){
    res.render("home");
});


app.get("/register",function(req,res){
    res.render("register");
});


app.get("/login",function(req,res){
      res.render("login");
});


//3- POST

app.post("/register", function(req,res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const newUser = new User ({
            email: req.body.username,
            password: hash  //md5 hash function
    
        })
    
        newUser.save(function(err){
            if (err){
                console.log(err)
            }else{
                res.render("secrets")
            }
          
        });
    });
    
});


app.post("/login",function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email:username},function(err,foundUser){
        if(err){
            console.log(err)
        }else{
            if(foundUser){
                bcrypt.compare(password, foundUser.password , function(err, result) {
                    if(result === true) {
                        res.render("secrets")
                    }
                });
                
            }
        }
    })

});