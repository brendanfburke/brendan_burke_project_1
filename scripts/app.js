const board = document.querySelector('.board-container')
const boardArray = board.querySelectorAll('.tile')
const htmlValues = []
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





console.log(boardArray[2].innerHTML)

console.log(htmlValues)

console.log(boardArray)

let validMove
let validAdd


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

function checkWin() {
    const win = (element) => element === 2048
    if (values.some(win) === true) {
        console.log('you win')
    }
}


function adder(arr, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    let validAddOne
    let validAddTwo
    let validAddThree
    let validAddFour
    if ((arr[a] > 0 && arr[a] === arr[b]) || (arr[a] > 0 && arr[a] === arr[c]) || (arr[a] > 0 && arr[a] === arr[d]) || (arr[b] > 0 && arr[b] === arr[c]) || (arr[b] > 0 && arr[b] === arr[d]) || (arr[c] > 0 && arr[c] === arr[d])) {
        validAddOne = true
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
        console.log(validAddOne)
    } else {
        validAddOne = false
        console.log(validAdd)
    }
    if ((arr[e] > 0 && arr[e] === arr[f]) || (arr[e] > 0 && arr[e] === arr[g]) || (arr[e] > 0 && arr[e] === arr[h]) || (arr[f] > 0 && arr[f] === arr[g]) || (arr[f] > 0 && arr[f] === arr[h]) || (arr[g] > 0 && arr[g] === arr[h])) {
        validAddTwo = true
        if (arr[h] === arr[g]) {
            arr[h] *= 2
            arr[g] = 0
        } else if (arr[g] === 0 && arr[h] === arr[f]) {
            arr[h] *=2
            arr[f] = 0
        } else if (arr[g] === 0 && arr[f] === 0 && arr[h] === arr[e]) {
            arr[d] *=2
            arr[e] = 0
        } 
        if (arr[g] === arr[f]) {
            arr[g] *= 2
            arr[f] = 0
        } else if (arr[f] === 0 && arr[g] === arr[e]) {
            arr[g] *=2
            arr[e] = 0
        } 
        if (arr[f] === arr[e]) {
            arr[f] *= 2
            arr[e] = 0
        } 
        console.log(validAddTwo)
    } else {
        validAddTwo = false
        console.log(validAddTwo)
    }
    if ((arr[i] > 0 && arr[i] === arr[j]) || (arr[i] > 0 && arr[i] === arr[k]) || (arr[i] > 0 && arr[i] === arr[l]) || (arr[j] > 0 && arr[j] === arr[k]) || (arr[j] > 0 && arr[j] === arr[l]) || (arr[k] > 0 && arr[k] === arr[l])) {
        validAddThree = true
        if (arr[l] === arr[k]) {
            arr[l] *= 2
            arr[k] = 0
        } else if (arr[k] === 0 && arr[l] === arr[j]) {
            arr[l] *=2
            arr[j] = 0
        } else if (arr[k] === 0 && arr[j] === 0 && arr[l] === arr[i]) {
            arr[l] *=2
            arr[i] = 0
        } 
        if (arr[k] === arr[j]) {
            arr[k] *= 2
            arr[j] = 0
        } else if (arr[j] === 0 && arr[k] === arr[i]) {
            arr[k] *=2
            arr[i] = 0
        } 
        if (arr[j] === arr[i]) {
            arr[j] *= 2
            arr[i] = 0
        } 
        console.log(validAddThree)
    } else {
        validAddThree = false
        console.log(validAddThree)
    }
    if ((arr[m] > 0 && arr[m] === arr[n]) || (arr[m] > 0 && arr[m] === arr[o]) || (arr[m] > 0 && arr[m] === arr[p]) || (arr[n] > 0 && arr[n] === arr[o]) || (arr[n] > 0 && arr[n] === arr[p]) || (arr[o] > 0 && arr[o] === arr[p])) {
        validAddFour = true
        if (arr[p] === arr[o]) {
            arr[p] *= 2
            arr[o] = 0
        } else if (arr[o] === 0 && arr[p] === arr[n]) {
            arr[p] *=2
            arr[n] = 0
        } else if (arr[o] === 0 && arr[n] === 0 && arr[p] === arr[m]) {
            arr[p] *=2
            arr[m] = 0
        } 
        if (arr[o] === arr[n]) {
            arr[o] *= 2
            arr[n] = 0
        } else if (arr[n] === 0 && arr[o] === arr[m]) {
            arr[o] *=2
            arr[m] = 0
        } 
        if (arr[n] === arr[m]) {
            arr[n] *= 2
            arr[m] = 0
        } 
        console.log(validAddFour)
    } else {
        validAddFour = false
        console.log(validAddFour)
    }

    if (validAddOne === true || validAddTwo === true || validAddThree === true || validAddFour === true) {
        validAdd = true
    } else if (validAddOne === false && validAddTwo === false && validAddThree === false && validAddFour === false) {
        validAdd = false
    }
}
// function adder(arr, a, b, c, d) {
//     if ((arr[a] > 0 && arr[a] === arr[b]) || (arr[a] > 0 && arr[a] === arr[c]) || (arr[a] > 0 && arr[a] === arr[d]) || (arr[b] > 0 && arr[b] === arr[c]) || (arr[b] > 0 && arr[b] === arr[d]) || (arr[c] > 0 && arr[c] === arr[d])) {
//         validAdd = true
//         if (arr[d] === arr[c]) {
//             arr[d] *= 2
//             arr[c] = 0
//         } else if (arr[c] === 0 && arr[d] === arr[b]) {
//             arr[d] *=2
//             arr[b] = 0
//         } else if (arr[c] === 0 && arr[b] === 0 && arr[d] === arr[a]) {
//             arr[d] *=2
//             arr[a] = 0
//         } 
//         if (arr[c] === arr[b]) {
//             arr[c] *= 2
//             arr[b] = 0
//         } else if (arr[b] === 0 && arr[c] === arr[a]) {
//             arr[c] *=2
//             arr[a] = 0
//         } 
//         if (arr[b] === arr[a]) {
//             arr[b] *= 2
//             arr[a] = 0
//         } 
//         console.log(validAdd)
//     } else {
//         console.log(validAdd)
//     }

// }



function slideRight(arr, a, b, c, d, e, f, g, h, z, j, k, l, m, n, o, p) {
    let validMoveOne = false
    let validMoveTwo = false
    let validMoveThree = false
    let validMoveFour = false

    if ((arr[a] > 0 && (arr[b] === 0 || arr[c] === 0 || arr[d] === 0)) || (arr[b] > 0 && (arr[c] === 0 || arr[d] === 0)) || (arr[c] > 0 && arr[d] === 0)) {
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
        validMoveOne = true
    } else {
        validMoveOne = false
    }
    if ((arr[e] > 0 && (arr[f] === 0 || arr[g] === 0 || arr[h] === 0)) || (arr[f] > 0 && (arr[g] === 0 || arr[h] === 0)) || (arr[g] > 0 && arr[h] === 0)) {
        for (let i = 0; i<8; i++) {
         if (arr[e] > 0 && arr[f] === 0) {
             arr[f] = arr[e]
             arr[e] = 0
         } 
         if (arr[f] > 0 && arr[g] === 0) {
             arr[g] = arr[f]
             arr[f] = 0
         }
         if (arr[g] > 0 && arr[h] === 0) {
             arr[h] = arr[g]
             arr[g] = 0
         }
        }
        validMoveTwo = true
    } else {
        validMoveTwo = false
    }
    if ((arr[z] > 0 && (arr[j] === 0 || arr[k] === 0 || arr[l] === 0)) || (arr[j] > 0 && (arr[k] === 0 || arr[l] === 0)) || (arr[k] > 0 && arr[l] === 0)) {
        for (let i = 0; i<8; i++) {
         if (arr[z] > 0 && arr[j] === 0) {
             arr[j] = arr[z]
             arr[z] = 0
         } 
         if (arr[j] > 0 && arr[k] === 0) {
             arr[k] = arr[j]
             arr[j] = 0
         }
         if (arr[k] > 0 && arr[l] === 0) {
             arr[l] = arr[k]
             arr[k] = 0
         }
        }
        validMoveThree = true
    } else {
        validMoveThree = false
    }
    if ((arr[m] > 0 && (arr[n] === 0 || arr[o] === 0 || arr[p] === 0)) || (arr[n] > 0 && (arr[o] === 0 || arr[p] === 0)) || (arr[o] > 0 && arr[p] === 0)) {
        for (let i = 0; i<8; i++) {
         if (arr[m] > 0 && arr[n] === 0) {
             arr[n] = arr[m]
             arr[m] = 0
         } 
         if (arr[n] > 0 && arr[o] === 0) {
             arr[o] = arr[n]
             arr[n] = 0
         }
         if (arr[o] > 0 && arr[p] === 0) {
             arr[p] = arr[o]
             arr[o] = 0
         }
        }
        validMoveFour = true
    } else {
        validMoveFour = false
    }

    if (validMoveOne === true || validMoveTwo === true || validMoveThree === true || validMoveFour === true) {
        validMove = true
    } else if (validMoveOne === false && validMoveTwo === false && validMoveThree === false && validMoveFour === false) {
        validMove = false 
    }
}



function moveRight(e) {
    if (e.keyCode === 39) {
        console.log('right')
        adder(values, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        slideRight(values, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

        if (validAdd === true || validMove === true) {
            lossCheck()
        } else if(validAdd === false && validMove === false) {
            console.log('no moves')
        }
        valuePusher()
        checkWin()
    }
}

function moveLeft(e) {
    if (e.keyCode === 37) {
        console.log('left')
        adder(values, 3, 2, 1, 0, 7, 6, 5, 4, 11, 10, 9, 8, 15, 14, 13, 12)
        slideRight(values, 3, 2, 1, 0, 7, 6, 5, 4, 11, 10, 9, 8, 15, 14, 13, 12)

        if (validAdd === true || validMove === true) {
            lossCheck()
        } else if(validAdd === false && validMove === false) {
            console.log('no moves')
        }
        valuePusher()
        checkWin()
    }
}
function moveUp(e) {
    if (e.keyCode === 38) {
        console.log('up')
        adder(values, 15, 11, 7, 3, 14, 10, 6, 2, 13, 9, 5, 1, 12, 8, 4, 0)
        slideRight(values, 15, 11, 7, 3, 14, 10, 6, 2, 13, 9, 5, 1, 12, 8, 4, 0)

        if (validAdd === true || validMove === true) {
            lossCheck()
        } else if(validAdd === false && validMove === false) {
            console.log('no moves')
        }
        valuePusher()
        checkWin()
    }
}
function moveDown(e) {
    if (e.keyCode === 40) {
        console.log('down')
        adder(values, 3, 7, 11, 15, 2, 6, 10, 14, 1, 5, 9, 13, 0, 4, 8, 12)
        slideRight(values, 3, 7, 11, 15, 2, 6, 10, 14, 1, 5, 9, 13, 0, 4, 8, 12)

        if (validAdd === true || validMove === true) {
            lossCheck()
        } else if(validAdd === false && validMove === false) {
            console.log('no moves')
        }
        valuePusher()
        checkWin()
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