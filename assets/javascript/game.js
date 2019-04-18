const maxGuesses = 10;
let guessCount = 0;
let answer;
let guessList = [];
let winCount = 0;
let lossCount = 0;

function start(){
    $("#wins").text(winCount);
    $("#loses").text(lossCount);
    $("guessesLeft").text(guessCount);
    $("letters").text(letter);
}

onkeypress = function(event) {

    //person guess
    let value = event.charCode || event.keyCode;
    let letter = String.fromCharCode(value);
    guessList.push(letter);
    alert("Your guesses" + guessList);
    




};






/* <p id="wins"></p>
<p id="loses"></p>
<p id="guessesLeft"></p>
<p id="guessesUsed"></p> */




