// Title and instruction box - static content/
$("document").ready(function() {
//set variables 

let targetNumber = 0;
let counterTotal = 0;
let wins = 0;
let losses = 0;


// Random computer guess logic and display, between 19 and 120.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function softReset() {
    for (var i = 0; i < 4; i++) {
        var imageCrystal = $(".crystal-image-" +i);
        imageCrystal.attr("data-crystalvalue", getRandomIntInclusive(1, 12));
        $("#crystals").append(imageCrystal);
    }
    counterTotal=0;
    targetNumber = getRandomIntInclusive(19, 120);
    $("#targetNumber").text(targetNumber);
    $("#counter").text(counterTotal); 
    console.log(counterTotal);

}

softReset();

    $("img").on("click", function () {
        let crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counterTotal += crystalValue;
        $("#counter").text(counterTotal);

        if (counterTotal === targetNumber) {
            wins++;
            alert("You Won!");
            softReset();
        }

        if (counterTotal > targetNumber) {
            losses++;
            alert("You Lost!");
            softReset();
        }

        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    });


});



// Wins and losses counter and display


//When button clicked
    //display score and add additional clicks together
    //when computer score = your score + wins
    //when computer score !== user score + losses

//game reset, all new random numbers
