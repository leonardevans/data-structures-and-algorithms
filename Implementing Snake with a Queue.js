// Learning Objective
/*
implementing slithering movement for a classic snake game
- queue for snake body (array)
- draw() - draw the grid wth the snakes body
- move() - take in a direction, manipulate queue 
*/

class Snake{
    constructor(){
        this.snakeBody = [
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4],
        ];
    }

    move(direction){
        const delta = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1],
        };

        const currentHead = this.snakeBody[this.snakeBody.length-1];
        const [currRow, currCel] = currentHead;
        const [changeRow, changeCol] = delta[direction];
        const newHead = [currRow+changeRow, currCel+changeCol];
        this.snakeBody.push(newHead);
        this.snakeBody.shift();
    }

    draw(){
        const grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(' ');
            }
            grid.push(row);
        }

        this.snakeBody.forEach( pos => {
            const [row, col] = pos;
            grid[row][col] ='0';
        });

        console.clear();
        grid.forEach(row => console.log(row.join('|')));
    }

    play(){
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', (keypress) =>{
            if(keypress === 'w') this.move('up');
            if(keypress === 'a') this.move('left');
            if(keypress === 's') this.move('down');
            if(keypress === 'd') this.move('right');

            if(keypress === '\u0003') process.exit();

            this.draw();
        });
    }
}

const game = new Snake();
game.play();