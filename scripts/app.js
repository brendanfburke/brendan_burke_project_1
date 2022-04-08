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
    if (randomIndex < .9) {
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


function adder(arr, a, b, c, d) {
    if (arr[d] === arr[c]) {
        arr[d] *= 2
        arr[c] = 0
    } else if (arr[c] === 0 && arr[d] === arr[b]) {
        arr[d] *=2
        arr[b] = 0
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



function slideRight(arr, a, b, c, d) {
    

    for (let i = 0; i<8; i++) {
     if (arr[a] > 0 && arr[b] === 0) {
         arr[b] = arr[a]
         arr[a] = 0
     } 
     if (arr[b] > 0 && arr[c] === 0) {
         arr[c] = arr[b]
         arr[b] = 0
     }
     if (arr[c] > 0 && arr[d] === 0) {
         arr[d] = arr[c]
         arr[c] = 0
     }
    }
    
    
}



function moveRight(e) {
    if (e.keyCode === 39) {
        console.log('right')
        adder(values, 0, 1, 2, 3)
        adder(values, 4, 5, 6, 7)
        adder(values, 8, 9, 10, 11)
        adder(values, 12, 13, 14, 15)
        slideRight(values, 0, 1, 2, 3)
        slideRight(values, 4, 5, 6, 7)
        slideRight(values, 8, 9, 10, 11)
        slideRight(values, 12, 13, 14, 15)
        
        lossCheck()
        valuePusher()
    }
}
function moveLeft(e) {
    if (e.keyCode === 37) {
        console.log('left')
        adder(values, 3, 2, 1, 0)
        adder(values, 7, 6, 5, 4)
        adder(values, 11, 10, 9, 8)
        adder(values, 15, 14, 13, 12)
        slideRight(values, 3, 2, 1, 0)
        slideRight(values, 7, 6, 5, 4)
        slideRight(values, 11, 10, 9, 8)
        slideRight(values, 15, 14, 13, 12)
        lossCheck()
        valuePusher()
    }
}
function moveUp(e) {
    if (e.keyCode === 38) {
        console.log('up')
        adder(values, 15, 11, 7, 3)
        adder(values, 14, 10, 6, 2)
        adder(values, 13, 9, 5, 1)
        adder(values, 12, 8, 4, 0)
        slideRight(values, 15, 11, 7, 3)
        slideRight(values, 14, 10, 6, 2)
        slideRight(values, 13, 9, 5, 1)
        slideRight(values, 12, 8, 4, 0)
        lossCheck()
        valuePusher()
    }
}
function moveDown(e) {
    if (e.keyCode === 40) {
        console.log('down')
        adder(values, 3, 7, 11, 15)
        adder(values, 2, 6, 10, 14)
        adder(values, 1, 5, 9, 13)
        adder(values, 0, 4, 8, 12)
        slideRight(values, 3, 7, 11, 15)
        slideRight(values, 2, 6, 10, 14)
        slideRight(values, 1, 5, 9, 13)
        slideRight(values, 0, 4, 8, 12)
        lossCheck()
        valuePusher()
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