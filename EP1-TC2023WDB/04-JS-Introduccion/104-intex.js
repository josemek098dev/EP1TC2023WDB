
1

var myName="angela";
var yourName = prompt("what  is your name")
alert("My name is " + myName + ",welcome to my course " + yourName + "!")


2

var gameLevel=1;
gameLevel=2;
gameLevel=3;
alert("Your level is currently: " + gameLevel);


3

var message ="hello";
var name= " Angela";

alert(message + " Angela");


4

var name = "angela";
name.length;


5

var message = prompt ("Write your message here" );

alert("your message have " + message.length + " , you have " + (140 -message.length ) + " characters left" )


6

var name = "Angela";
name.slice (0,1);

//A

X


What does y  equal?

var x = 3;
var y = x++;
y += 1;


7

var message = prompt ("Write your message here" );
var under140Characters = message.slice(0,140); 

alert("your message is " + under140Characters);


7*

alert(prompt ("Write your message here").slice(0,140));


8

var name = "Angela";
name.toUpperCase();
name.toLowerCase();

//ANGELA
//angela


9

var name = prompt("What is your name?")
var firstLetterName = name.slice(0,1)
var lengthName = name.length
alert(firstLetterName.toUpperCase() + name.slice(1,lengthName));


10

dogAge = prompt("How old are you dog?");
alert("Your dog to human age is " + ((dogAge-2)*4+21));


11

function getMilk(){
    alert("a");
    alert("b");
    alert("c");
}
getMilk();


12

https://stanford.edu/~cpiech/karel/ide.html

//

function main(){
goInCircle();
goInCircle();

}

function goInCircle(){
   move();
   turnLeft();
   move();
   turnLeft();
   }

//

function main(){
goToCorner();
goToCorner();
goToCorner();

}

function goToCorner(){
   move();
   turnLeft();
   move();
   turnRight();
   }

//

function main(){
 fun1();
   turnLeft();
move();
 fun2();
  turnRight();
  fun1();
     turnLeft();
     move();
   fun2();
     turnRight();
   fun1();
}

function fun1(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   }
   
function fun2(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();

   turnRight();
   move();
   }

//

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

//

function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy" + bottles + "Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
function getMilk(12);

//

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + (money/2) + " Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(12);
//


function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + (Math.floor(money/2)) + " Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(13);

//

e.g. If you are 56 years old:

lifeInWeeks(56)
Example Output

You have 12410 days, 1768 weeks, and 408 months left.

//

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    var yearsLeft = (90-age);
    var monthsLeft = yearsLeft*12;
    var weekendsLeft = yearsLeft*52;
    var daysLeft = yearsLeft*365;
    console.log('You have ' + daysLeft + ' days, ' +  weekendsLeft + ' weeks, and ' + monthsLeft + ' months left.');
    

    
    
/*************Don't change the code below**********/
}

//

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + (Math.floor(money/2)) + " Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money%2;
}

var change = getMilk(6);
console.log(change);

//

function bmiCalculator(weight,height){
    return Math.round(weight*100/(height*height));
}

