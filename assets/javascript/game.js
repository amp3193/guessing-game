const maxGuesses = 10;
let guessCount = 0;
let answer;
let guessList = [];
let winCount = 0;
let lossCount = 0;

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function display(){
    $("#wins").text("Wins: " + winCount);
    $("#losses").text("Losses: " + lossCount);
    $("#guessesLeft").text("Guesses Left: " + (maxGuesses - guessCount));
    $("#letters").text("Guess List:" + guessList);
}

function start() {
    //generates a random letter answer
    let index = Math.floor(Math.random() * alpha.length);
    answer = alpha[index];
    guessCount = 0;
    guessList = [];
    display();
}

function guessTests(letter) {
    let result = false;

    if (isValidLetter(letter)) {
        
        if (!hasBeenGuessed(letter)) {
            result = true;
        } else {
            alert("You already guessed that letter!");
        }
    } else {
        alert("That's not a letter!");
    }
       
    return result;
}

function hasBeenGuessed(letter) {
    let index = guessList.indexOf(letter);
    let found = (index > -1);

    return found;
}

function isValidLetter(letter) {
    let index = alpha.indexOf(letter);
    let found = (index > -1);

    return found;
}

function handleUserInput(event) {
    let letter = event.key.toLowerCase();
    if (guessTests(letter)) {
        guessCount = guessList.push(letter);
        gameStatus();
    }
    display();
}

function gameStatus() {
    if (hasBeenGuessed(answer)) {
        winCount++;
        start();
    } else if (guessCount >= maxGuesses) {
        lossCount++;
        start();
    } 
}

onkeypress = handleUserInput;

start();
