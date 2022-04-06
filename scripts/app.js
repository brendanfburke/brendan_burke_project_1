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
        boardArray[i].innerHTML=values[i].toString()
    }
}

function moveRight(e) {
    if (e.keyCode === 39) {
        console.log('right')
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


valuePusher()
console.log(boardArray)
console.log(values)


document.addEventListener('keydown', moveRight)
document.addEventListener('keydown', moveLeft)
document.addEventListener('keydown', moveUp)
document.addEventListener('keydown', moveDown)