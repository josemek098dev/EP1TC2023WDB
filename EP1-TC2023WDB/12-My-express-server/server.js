
const express = require("express");

const app = express();

//Y este es un método proporcionado por Express que nos permite especificar qué debería suceder cuando un
//navegador se pone en contacto con nuestro servidor y realiza una solicitud de obtención.

//puede abreviarse req, res

//"/" es  la ruta a la que le vamos a responder

app.get("/",function(request,response){
    response.send("<h1> Hello, world! </h1>");
});

app.get("/contact",function(request,response){
    response.send("<h1> Contact me at: josemek098dev@gmail.com </h1>");
});

app.get("/about",function(request,response){
    response.send(" Hi!!!, I'm Josemekdev a new full stack web developer ");
});

app.listen(3000,function(){
    console.log("Server started on port 3000!!")
});