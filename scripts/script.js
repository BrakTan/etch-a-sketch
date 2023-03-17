const grid = document.querySelector('.grid');
let numberOfSquares = 32//prompt("How many squares ? (Max: 100)");
if(numberOfSquares > 100 || numberOfSquares < 1){
    numberOfSquares = 32;
}
displayGrid(numberOfSquares);

function displayGrid(numberOfSquares){
    for(let i = 0; i < numberOfSquares; i++){
        for(let j = 0; j < numberOfSquares; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = (600/numberOfSquares)+'px';
            square.style.height = (600/numberOfSquares)+'px';
            grid.appendChild(square);
        }
    }

}


let clearButton = document.querySelector('.clearGrid');
clearButton.addEventListener('click', () => {
    for(let i = squares.length ; i > 0; i--){
        grid.removeChild(grid.lastChild); 
    }
    displayGrid(numberOfSquares);
})

function colorSquares(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        }  )
    })
}

