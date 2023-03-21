const grid = document.querySelector('.grid');
let squares;
let numberOfSquares = 32//prompt("How many squares ? (Max: 100)");
if(numberOfSquares > 100 || numberOfSquares < 1){
    numberOfSquares = 32;
}
displayGrid(numberOfSquares);

const squareRange = document.getElementById('squareRange');
const squareRangeIndicator = document.querySelector('#squareRangeLabel span');
squareRange.addEventListener('input', (event) =>{
    console.log(event.target.value);
    numberOfSquares = event.target.value;
    squareRangeIndicator.textContent = numberOfSquares;
    //this.addEventListener('change', clearGrid()) #This line reset a new grid at every changement, but cause performance issues
})


colorSquares();

let clearButton = document.querySelector('.clearGrid');
clearButton.addEventListener('click', clearGrid);


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
            if(mouseDown && square.getAttribute('painted') === 'false'){
                square.style.backgroundColor = `hsl(${Math.floor(Math.random()*360 +1)} 98% 50%)`;
                square.setAttribute('painted', true);
            }           
        })
        square.addEventListener('mousedown', (event) => {
            square.style.backgroundColor = `hsl(${Math.floor(Math.random()*360 +1)} 98% 50%)`;
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
}