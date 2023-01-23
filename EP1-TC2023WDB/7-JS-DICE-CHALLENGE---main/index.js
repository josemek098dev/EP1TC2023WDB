var randomNumber1 = Math.floor (Math.random ()*6+1);

var randomNumber2 = Math.floor (Math.random ()*6+1);

console.log (randomNumber1);

var randomNumberSet1 = "images\\dice" + randomNumber1 + ".png ";

var randomNumberSet2 = "images\\dice" + randomNumber2 + ".png ";

console.log (randomNumberSet1);

document.querySelector(".img1").src = randomNumberSet1;

document.querySelector(".img2").src = randomNumberSet2;

if (randomNumberSet1 > randomNumberSet2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins! "
} else if (randomNumberSet1 < randomNumberSet2){
    document.querySelector("h1").innerHTML = " Player 2 wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"   
}