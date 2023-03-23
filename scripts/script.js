const grid = document.querySelector('.grid');
const showGrid = document.querySelector('.showGrid');
const showColor = document.querySelector('.showColor')
let actualColor = 'yellow';
let squares;
let rangeNumber = 32;
let numberOfSquares = rangeNumber;
if(numberOfSquares > 100 || numberOfSquares < 1){
    numberOfSquares = 32;
}
displayGrid(numberOfSquares);

const squareRange = document.getElementById('squareRange');
const squareRangeIndicator = document.querySelector('#squareRangeLabel span');
squareRange.addEventListener('input', (event) =>{
    console.log(event.target.value);
    rangeNumber = event.target.value;
    squareRangeIndicator.textContent = rangeNumber;
    //this.addEventListener('change', clearGrid()) #This line reset a new grid at every changement, but cause performance issues
})


colorSquares();

let clearButton = document.querySelector('.clearGrid');
clearButton.addEventListener('click', () => {
    numberOfSquares = rangeNumber;
    clearGrid();
});

const gridChoice = document.querySelectorAll('.premakeGrids button');
gridChoice.forEach((grid) =>{
    grid.addEventListener('click', () =>{
        numberOfSquares = grid.getAttribute('value');
        clearGrid();
    })
})


const colorChoice = document.querySelectorAll('.color');
colorChoice.forEach((color) =>{
    color.addEventListener('click', () =>{
        actualColor = color.getAttribute('value');
        showColor.textContent = actualColor;
        showColor.style.background = actualColor;
        if(actualColor === 'Rainbow'){
            showColor.style.background = 'linear-gradient(to left top, #fc0303, #fcfc03, #03fc03, #03fcfc, #0303fc, #fc03fc)';
        }
    })
    color.addEventListener('change', (event) =>{
        actualColor = event.target.value;
        showColor.textContent = actualColor;
        showColor.style.background = actualColor;
    })
    
})


function displayGrid(numberOfSquares){
    for(let i = 0; i < numberOfSquares; i++){
        for(let j = 0; j < numberOfSquares; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('draggable', false);
            square.setAttribute('painted', false);
            square.style.width = (600/numberOfSquares)+'px';
            square.style.height = (600/numberOfSquares)+'px';
            grid.appendChild(square);
        }
    }
    
}

function rainbowColor(){
    return `hsl(${Math.floor(Math.random()*360 +1)} 98% 50%)`
}

function colorSquares(){
    let mouseDown = false;
    document.body.addEventListener('mousedown', (event) => {
        if(event.button === 0){
            mouseDown = true;
            console.log(mouseDown);
        }
    })
    document.body.addEventListener('mouseup', (event) => {
        if(event.button === 0){
            mouseDown = false;
            console.log(mouseDown);
        }
    })
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
            if(mouseDown){
                if(actualColor === 'Rainbow'){
                    square.style.backgroundColor = rainbowColor();
                }
                else{
                    square.style.backgroundColor = actualColor;
                }
                square.setAttribute('painted', true);
            }           
        })
        square.addEventListener('mousedown', (event) => {
            if(actualColor === 'Rainbow'){
                square.style.backgroundColor = rainbowColor();
            }
            else{
                square.style.backgroundColor = actualColor;
            }
            event.preventDefault();
        })
    })
}

function clearGrid() {
    for(let i = squares.length ; i > 0; i--){
        grid.removeChild(grid.lastChild); 
    }
    displayGrid(numberOfSquares);
    colorSquares();
    showGrid.textContent = `${numberOfSquares}x${numberOfSquares}`;
}