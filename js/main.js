

var squares = document.querySelectorAll('.square');
var luckyColorTitle = document.getElementById('colorDisplay');
var resetBtn = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");

var luckyColorNum;
var luckyColorString;


function startGame() {
    resetSquaresDisplay();
    luckyColorNum = luckyColor();
    for (let i = 0; i < squares.length; i++) {
        let colorSting = `rgb(${randomNumGen()}, ${randomNumGen()}, ${randomNumGen()})`;
        squares[i].style.background = `${colorSting}`;
        if (i == luckyColorNum) {
            luckyColorString = colorSting;
            writeColorInFront(luckyColorString);
        }
    }
}

function randomNumGen() {
    return Math.floor(Math.random() * 256);
}

function resetSquaresDisplay(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('display-none');
    }
}

function luckyColor() {
    return Math.floor(Math.random() * squares.length);
}

function writeColorInFront(string) {
    luckyColorTitle.innerText = string.toUpperCase();
}

function winAndRestart() {
    alert("You have won the game!");   
    startGame();
}

function onClickCheck(index) {
    if (index == luckyColorNum) winAndRestart();
    else wrongGuess(index);
}

function wrongGuess(index) {
    squares[index].classList.add("display-none");
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        let index = squares[i].getAttribute('value')
        onClickCheck(index);
    });
}

resetBtn.addEventListener('click', startGame);


startGame();