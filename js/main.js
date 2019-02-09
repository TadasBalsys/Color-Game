//  255
// `rba(${randomNumGen()}, ${randomNumGen()}, ${randomNumGen()})`


var squares = document.querySelectorAll('.square');





function randomNumGen() {
    return Math.floor(Math.random() * 256);
}

function generateColor() {
    let luckyColorNum = luckyColor();
    for (let i = 0; i < squares.length; i++) {
        let colorSting = ``;
        squares[i].style.background = `rgb(${randomNumGen()}, ${randomNumGen()}, ${randomNumGen()})`;
        // if(i == luckyColorNum)
    }
}

function luckyColor() {
    return Math.floor(Math.random() * square.length);
}

generateColor();