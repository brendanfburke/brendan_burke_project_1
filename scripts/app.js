const board = document.querySelector('.board-container')
const boardArray = board.querySelectorAll('.tile')
const values = [
    2,2,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
]

function valuePusher() {
    for (let i = 0; i<values.length; i++) {
        if (values[i] === 0) {
            boardArray[i].innerHTML = ''
        } else {
            boardArray[i].innerHTML=values[i].toString()
        }
    }
}

const zeroCheck = (element) => element === 0;

// console.log(values.some(zeroCheck))

function checkValue(tile) {
    if (tile === 0) {
        return true
    } else {
        return false
    }
}

let newPopulation = 0

function newNum() {
    let randomIndex = Math.random()
    console.log(randomIndex)
    if (randomIndex < .8) {
        newPopulation = 2
    } else {
        newPopulation = 4
    }
    console.log(newPopulation)
}



function populateRandom() {
    let randomIndex = Math.floor(Math.random()*values.length)
    let square = checkValue(values[randomIndex])
    newNum()
        if (square === true) {
            values[randomIndex] = newPopulation
            valuePusher()
        } else if (square === false) {
            populateRandom()
        } else {
            console.log('game over')
        }
    console.log(values.some(zeroCheck))
}

function boardCheck() {
    if (values.some(zeroCheck) === true) {
        populateRandom()
    } else if (values.some(zeroCheck) === false) {
        console.log('Game Over You Lose!!!')
    } else {
        console.log('something is wrong')
    }
}


function moveRight(e) {
    let sum = values[0] + values[1]
    if (e.keyCode === 39) {
        console.log('right')
        values[3] = sum
        values[0] = 0
        values[1] = 0
        valuePusher()
    }
}
function moveLeft(e) {
    if (e.keyCode === 37) {
        boardCheck()
    }
}
function moveUp(e) {
    if (e.keyCode === 38) {
        console.log('up')
    }
}
function moveDown(e) {
    if (e.keyCode === 40) {
        console.log('down')
    }
}


valuePusher()



document.addEventListener('keydown', moveRight)
document.addEventListener('keydown', moveLeft)
document.addEventListener('keydown', moveUp)
document.addEventListener('keydown', moveDown)