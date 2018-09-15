/*pseudocoding
4 crystals, one random result 
crystal numbers between 1-12
The random number shown at the start of the game should be between 19 - 120.
When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. 
The user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
*/

//initial variables
var randomNumber;
var lost = 0;
var win = 0;
var userscore = 0;

var amethyst = 0;
var pearl = 0;
var sapphire = 0;
var ruby = 0;



$(document).ready(function () {



    /* i wanted to do it with a for, but I didn't manage to do it like that 
        for(var i=0;i<4; i++){
        var random= Math.floor(Math.random()*12+1);
        console.log(random);
    
        var crystal= $("<div>");
        crystal.atrr({
            "class":"gem",
            "data-random":random
        });
        $(".gem").append(crystal);
    }*/

    //starting game, variables for the crystals and the random number
    randomNumber = Math.floor(Math.random() * 100 + 21);
    $("#randomnumber").html("Number to Match: " + randomNumber);
    console.log(randomNumber);
    amethyst = Math.floor(Math.random() * 12 + 1);
    pearl = Math.floor(Math.random() * 12 + 1);
    sapphire = Math.floor(Math.random() * 12 + 1);
    ruby = Math.floor(Math.random() * 12 + 1);

    //a function to randomize the random number
    function randomize(){
        randomNumber = Math.floor(Math.random() * 100 + 21);
    }

    //the reset, so everything starts again once you won or lost
    function reset(wonOrLost){
        setTimeout(alert("you "+wonOrLost+"!  Ready for a new game?"),2000);
        userscore=0;
        randomize();
        amethyst = Math.floor(Math.random() * 12 + 1);
        pearl = Math.floor(Math.random() * 12 + 1);
        sapphire = Math.floor(Math.random() * 12 + 1);
        ruby = Math.floor(Math.random() * 12 + 1);
        $("#score").html("Your total score is: " + userscore);
        $("#randomnumber").html("Number to Match: " + randomNumber);
    };

    //what happens when you click on a gem
    
    $(".crystals").click(function () {

        var selectedId = $(this).attr("id");
    
        if (selectedId === "amethyst") {
            userscore = userscore + amethyst;
        }
        else if (selectedId === "pearl") {
            userscore = userscore + pearl;
        }
        else if (selectedId === "sapphire") {
            userscore = userscore + sapphire;
        }
        else if (selectedId === "ruby") {
            userscore = userscore + ruby;
        }


        $("#score").html("Your total score is: " + userscore);

        //the counter of win and lost matches and comparison of the userscore & randomNumber
        if (userscore === randomNumber) {
    
            win++;
            
            $("#wins").text("Wins: "+ win);
            console.log("you won");
            reset("won");
            } 
            
            else if (userscore > randomNumber) {
            
            lost++;
            
            $("#losses").text("Losses: "+ lost);
        
            console.log("you're a big loser");
            reset("lost");
            }
    });
    
});