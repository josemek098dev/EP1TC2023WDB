const express = require("express");
const https = require ("https");

const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");
        
});

app.post("/", function(req,res){

  console.log("Post request recived.");  

    const query = req.body.cityName;
    const apiKey= "d6c042b36ecd3f14a34fcfc1fbbc33a1";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            console.log(temp)
            console.log(weatherDescription)

            res.write ("<h1> The temperature in " + query + " is " + temp + " degrees Celcius. The weather is currently " + weatherDescription + "</h1>")
        

            res.write("<img src=" + imageURL + " alt='jose profile picture' >");
            
            res.send()

// Solo podemos tener un res.send pero multiples res.write 

        })
    })
})



app.listen(3000,function(){
    console.log("server is running on port 3000.")
});

/* PENDIENTES

1. DEBERIA REPASAR BODY PARSER 

*/