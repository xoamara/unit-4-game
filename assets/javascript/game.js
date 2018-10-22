// Title and instruction box - static content/

//set variables 

let targetNumber = 0;
let counterTotal = 0;
let wins = 0;
let losses = 0;
let overTarget = false;

//make a reset function

function gameReset() {
    targetNumber = "";
    counterTotal = "";
    wins = "";
    losses = "";

    $("#targetNumber", "#wins", "#losses", "#counter").emtpy();
}

// Random computer guess logic and display, between 19 and 120.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(120);
    max = Math.floor(19);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

targetNumber = getRandomIntInclusive();
getRandomIntInclusive();

$("#targetNumber").text(targetNumber);

//4 random numbers generated at the start of the game to the images, between 1 - 12

let numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 0; i < numberOptions.length; i++) {
    let imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);

}

$(".crystal-image").on("click", function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counterTotal += crystalValue;
    console.log("I've been clicked")

});






//4 random numbers generated at the start of the game to the images, between 1 - 12

// Wins and losses counter and display

//Cumulative score based on button clicks with display

//When button clicked
    //display score and add additional clicks together
    //when computer score = your score + wins
    //when computer score !== user score + losses

//game reset, all new random numbers
