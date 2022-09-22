const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}
//generates a random location using the grid_size value to pick a place to spawn a food pellet

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

//keeps track of the size of the grid so we can call upon it in  game.js  to  determine where the snake is on the screen