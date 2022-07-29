// Global Variables

const DEFAULT_WHITE = "#FFFFFF"
const BRUSH = 'brush';
const ERASER = 'eraser';

let currentTool = BRUSH; // initial tool set to brush
let isMouseDown = false;

let size = 16;

const board = document.querySelector('.board-container');
const brushButton = document.querySelector('#brush');
const eraserButton = document.querySelector('#eraser');
const clearButton = document.querySelector('#clear');
const colorpicker = document.querySelector('#colorpicker');
const sizeSlider = document.querySelector('#size-slider');
const sizeText = document.querySelector('.size-text');

brushButton.onclick = () => {currentTool = BRUSH;}
eraserButton.onclick = () => {currentTool = ERASER;}
// document.body.onmousedown = () => {isMouseDown = true}
// document.body.onmouseup = () => {isMouseDown = false}

function createBoard() {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = 'cell-' + String(i);
        cell.style.backgroundColor = DEFAULT_WHITE 

        // board height/width = 500px => 500 / 16 = 31.25px - 2px bc of border so 29.25px
        cell.style.width = String((500 / size) - 2) + 'px';
        cell.style.height = String((500 / size) - 2) + 'px';


        cell.addEventListener('mouseover', changeColorCell)

        cell.addEventListener('mousedown', changeColorCell)

        board.appendChild(cell);
    }
}

function changeColorCell(e) {
    e.preventDefault();
    if (e.type === 'mouseover' && !isMouseDown) {
        return;
    }
    if (currentTool === BRUSH) {
        e.target.style.backgroundColor = colorpicker.value;
    }
    if (currentTool === ERASER) {
        e.target.style.backgroundColor = DEFAULT_WHITE;
    }
}

function editGridSize() {
    board.innerHTML = '';
    size = sizeSlider.value;
    createBoard();
}

clearButton.onclick = () => {
    board.innerHTML = '';
    createBoard();
}

sizeSlider.oninput = () => {
    sizeText.innerHTML = String(sizeSlider.value) + 'x' + String(sizeSlider.value);
    editGridSize();
}

window.addEventListener("mousedown", function() {
    isMouseDown = true;
})

window.addEventListener("mouseup", function() {
    isMouseDown = false;
})

createBoard();

