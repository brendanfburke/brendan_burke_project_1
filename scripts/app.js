const board = document.querySelector('.board-container')
const boardArray = board.querySelectorAll('.tile')
const values = [
    0,0,4,0,
    0,2,0,0,
    0,0,0,0,
    0,0,0,0
]

function valuePusher() {
    for (let i = 0; i<values.length; i++) {
        boardArray[i].innerHTML=values[i].toString()
    }
}

valuePusher()
console.log(boardArray)
console.log(values)