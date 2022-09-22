import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }
        return
    }
    //prompts the user to restart the game by refreshing the page when they lose

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()
    draw()
}


window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
//keeps track of the snake, food and death status by updating the screen as needed

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
//adds food and snake into the grid

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

//determines if the player has left the grid or not to trigger a game over event