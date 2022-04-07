const board = document.querySelector('.board-container')
const boardArray = board.querySelectorAll('.tile')
const values = [
    0,0,0,0,
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
    if (randomIndex < .8) {
        newPopulation = 2
    } else {
        newPopulation = 4
    }
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
}

const zeroCheck = (element) => element === 0;

function lossCheck() {
    if (values.some(zeroCheck) === true) {
        populateRandom()
    } else if (values.some(zeroCheck) === false) {
        console.log('Game Over You Lose!!!')
    } else {
        console.log('something is wrong')
    }
}


function slide(arr) {
    for (let j = 0; j<3; j++){
        for (let i = 0; i<3; i++) {
            if (arr[i] > 0 && arr[i+1] === 0) {
                arr[i+1] = arr[i]
                arr[i] = 0
            }
        }
        for (let i = 4; i<7; i++) {
            if (arr[i] > 0 && arr[i+1] === 0) {
                arr[i+1] = arr[i]
                arr[i] = 0
            }
        }
        for (let i = 8; i<11; i++) {
            if (arr[i] > 0 && arr[i+1] === 0) {
                arr[i+1] = arr[i]
                arr[i] = 0
            }
        }
        for (let i = 12; i<15; i++) {
            if (arr[i] > 0 && arr[i+1] === 0) {
                arr[i+1] = arr[i]
                arr[i] = 0
            }
        }
    }
}


function moveRight(e) {
    if (e.keyCode === 39) {
        console.log('right')
        slide(values)
        valuePusher()
    }
}
function moveLeft(e) {
    if (e.keyCode === 37) {
        console.log('left')
        lossCheck()
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