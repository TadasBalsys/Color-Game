
// Changed elem.style.background to backgroundColor(cause by Colt, backgroundColor support more browsers)

var squares = document.querySelectorAll('.square');
var luckyColorTitle = document.getElementById('colorDisplay');
var resetBtn = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
var messageTitle = document.querySelector('#message');
var header = document.querySelector('#header');

var luckyColorNum;
var luckyColorString;

// numberOfSquares - have two values: 3 - easy mode; 6 - hard mode
var numberOfSquares = 6;


function startGame() {
    resetGame();
    luckyColorNum = luckyColor();    
    for (let i = 0; i < numberOfSquares; i++) {
        let colorSting = `rgb(${randomNumGen()}, ${randomNumGen()}, ${randomNumGen()})`;
        squares[i].style.backgroundColor = `${colorSting}`;
        if (i == luckyColorNum) {
            luckyColorString = colorSting;
            writeColorInTitle(luckyColorString);
        }
    }
}

function randomNumGen() {
    return Math.floor(Math.random() * 256);
}

function luckyColor() {
    return Math.floor(Math.random() * numberOfSquares);
}

function modeSelector(index) {
    if (index == 0) {
        modes[index].classList.add('selected');
        modes[index + 1].classList.remove('selected');       
        numberOfSquares = 3;       
        for (let i = 3; i < squares.length; i++) {
            squares[i].classList.add('display-turnOff');            
        }
        startGame();
    } else if (index == 1) {
        modes[index].classList.add("selected");
        modes[index - 1].classList.remove('selected');       
        numberOfSquares = 6; 
        for (let i = 3; i < squares.length; i++) {
            squares[i].classList.remove('display-turnOff');
        }
        startGame();
    }
}

function resetGame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('display-none');
    }
    messageTitle.innerText = '';
    resetBtn.innerText = "New Colors"
    header.style.backgroundColor = 'rgb(60, 118, 174)'
}

function writeColorInTitle(string) {
    luckyColorTitle.innerText = string.toUpperCase();
}

function win() {    
    messageTitle.innerText = "You have won the game!";
    header.style.backgroundColor = luckyColorString;
    resetBtn.innerText = "Play Again?"
    for (let i = 0; i < numberOfSquares; i++) {  
        // reset display of squares 
        squares[i].classList.remove('display-none');        
        squares[i].style.backgroundColor = luckyColorString;
    }
}

function onClickCheck(index) {
    if (index == luckyColorNum) win();
    else wrongGuess(index);
}

function wrongGuess(index) {
    squares[index].classList.add("display-none");
    messageTitle.innerText = "Try Again";
}

for (let i = 0; i < numberOfSquares; i++) {
    squares[i].addEventListener("click", function () {
        let index = this.getAttribute('value')
        onClickCheck(index);
    });
}

for (let i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function () {
        modeSelector(i);
    });
}

resetBtn.addEventListener('click', startGame);

startGame();


//  Visiems

var atsakymas = 30+13+31+13+7+19+31;

console.log(atsakymas);
