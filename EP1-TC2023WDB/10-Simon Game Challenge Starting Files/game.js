
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var randomNumber;

var indexAnswer;

var level = 0;


//1 DETECT key to START

$("h1").click(nextSequence);

//2 M++ --- increment M (gamePattern)

function nextSequence() {

  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  console.log (gamePattern);

};

//3 CLICK CALL --- [] [a] [a,b] [a,b,c]  (userClickedPattern)


$(".btn").click(function(){



  var userChosenColor = $(this).attr("id")
                
  userClickedPattern.push(userChosenColor);
    
  var audio = new Audio("sounds/" + userChosenColor + ".mp3");
  audio.play();

  var btnSelect = this;
  
  animatePress(btnSelect);



  if ( userClickedPattern.length >= gamePattern.length ) {
 


   if (userClickedPattern[userClickedPattern.length - 1] == gamePattern[userClickedPattern.length - 1]) {


      $("h1").text("ok " + gamePattern.length);

       userClickedPattern = [];

       nextSequence();
                                         
      } else {

      var audio = new Audio("sounds/bobo.mp3");
      audio.play();
      $("h1").text("LOSSSERRRREERRRR")
      $("body").css('background-color', 'red');
            
      }

  }else{


     if (userClickedPattern[userClickedPattern.length - 1] == gamePattern[userClickedPattern.length - 1]) {

      $("h1").text("ok " + gamePattern.length);
                               
      } else {

      var audio = new Audio("sounds/bobo.mp3");
      audio.play();
  
      $("h1").text("LOSSSERRRREERRRR")
      $("body").css('background-color', 'red');
      }
 
  }});

//3.1 AUX FUNCTION

function animatePress(currentColour){


  $(currentColour).addClass("pressed");


  let timeout;


  function myFunction() {
    timeout = setTimeout(alertFunc, 200);
  };
  
  function alertFunc() {
  
    $(currentColour).removeClass("pressed");

  };

  myFunction();

  
};

//4 FUNCTION CHECK ANSWER 1







