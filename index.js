alert("Hello world you are welcomed to ZENODICE GAME.")
var username = prompt("what is your name player 1");
var username1 = prompt("What is your name player 2")


var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var randimDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randimDiceImage;

var image1 = document.querySelectorAll("img")[0];
 
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆WON🥇...Player 1 wins🎮.";
    alert("Nice game by " + username );
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆WON🥇...Player 2 wins🎮.";
    alert("Nice game by " + username1);
} else {
    document.querySelector("h1").innerHTML = "DRAW..... Game replay🎮.";
}




alert(" Refresh me and keep playing.");