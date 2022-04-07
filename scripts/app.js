const board = document.querySelector('.board-container')
const boardArray = board.querySelectorAll('.tile')
const values = [
    2,0,0,4,
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


lossCheck()
lossCheck()

function adderRight(arr, a, b, c, d) {
    if (arr[d] === arr[c]) {
        arr[d] *= 2
        arr[c] = 0
    } else if (arr[c] === 0 && arr[d] === arr[b]) {
        arr[d] *=2
        arr[c] = 0
    } else if (arr[c] === 0 && arr[b] === 0 && arr[d] === arr[a]) {
        arr[d] *=2
        arr[a] = 0
    }
    if (arr[c] === arr[b]) {
        arr[c] *= 2
        arr[b] = 0
    } else if (arr[b] === 0 && arr[c] === arr[a]) {
        arr[c] *=2
        arr[a] = 0
    }
    if (arr[b] === arr[a]) {
        arr[b] *= 2
        arr[a] = 0
    } 

}

function slideRight(arr) {
    adderRight(values, 0, 1, 2, 3)
    adderRight(values, 4, 5, 6, 7)
    adderRight(values, 8, 9, 10, 11)
    adderRight(values, 12, 13, 14, 15)
    
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
    lossCheck()
}



function moveRight(e) {
    if (e.keyCode === 39) {
        console.log('right')
        slideRight(values)
        valuePusher()
    }
}
function moveLeft(e) {
    if (e.keyCode === 37) {
        console.log('left')
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

function spaceAdd(e) {
    if (e.keyCode === 32) {
        console.log('space')
        lossCheck()
    }
}


valuePusher()



document.addEventListener('keydown', moveRight)
document.addEventListener('keydown', moveLeft)
document.addEventListener('keydown', moveUp)
document.addEventListener('keydown', moveDown)
document.addEventListener('keydown', spaceAdd)