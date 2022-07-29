// Global Variables

const DEFAULT_BLACK = "#000000";
const DEFAULT_WHITE = "#FFFFFF"
const BRUSH = 'brush';
const ERASER = 'eraser';

let currentColor = DEFAULT_BLACK;
let currentTool = BRUSH; // initial tool set to brush
let isMouseDown = false;

const board = document.querySelector('.board-container');
const brushButton = document.querySelector('#brush');
const eraserButton = document.querySelector('#eraser');
const clearButton = document.querySelector('#clear');

brushButton.onclick = () => {currentTool = BRUSH;}
eraserButton.onclick = () => {currentTool = ERASER;}
document.body.onmousedown = () => {isMouseDown = true}
document.body.onmouseup = () => {isMouseDown = false}

function createBoard() {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = 'cell-' + String(i);
        cell.style = 'width: 29.25px; height: 29.25px;' // board height/width = 500px => 500 / 16 = 31.25px - 2px bc of border so 29.25px

        cell.addEventListener('mouseover', changeColorCell)

        cell.addEventListener('mousedown', changeColorCell)

        board.appendChild(cell);
    }
}


function changeColorCell(e) {
    if (e.type === 'mouseover' && !isMouseDown) {
        return;
    }
    if (currentTool === BRUSH) {
        e.target.style.backgroundColor = currentColor;
    }
    if (currentTool === ERASER) {
        e.target.style.backgroundColor = DEFAULT_WHITE;
    }
}

clearButton.onclick = () => {
    board.innerHTML = '';
    createBoard();
}



createBoard();

