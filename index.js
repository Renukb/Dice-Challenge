var randomNumber1 = Math.floor(Math.random() * 6) + 1; //For dice 1
//console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //For dice 2

var randomImage = "dice" + randomNumber1 + ".png"; // for all dice images

var imagePath1 = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagePath1);

var imagePath2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagePath2);

//Conditions for player
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw";
}
