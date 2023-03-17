const grid = document.querySelector('.grid');
let numberOfSquares = 16;


for(let i = 0; i < 16; i++){
    for(let j = 0; j < numberOfSquares; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = (500/16)-2+'px';
            square.style.height = (500/16)-2+'px';
            grid.appendChild(square);
    }
}



