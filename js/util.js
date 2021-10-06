'use strict'

// Builds the board, and return the created board
function buildBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell()
        }
    }
    return board
}


// count neighbors
function countNeighbors(cellI, cellJ, board) {
    var neighborsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue
            if (i === cellI && j === cellJ) continue
            if (board[i][j].value === MINE) neighborsCount++
        }
    }
    return neighborsCount
}


// get an array with cells idx in the matrix 
function getCells(board){
    var cells = []
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[0].length;j++){
            var cell = {i:i,j:j}
            cells.push(cell)
        }
    }
    return cells
}

// get random cell from the array
function getRandomCell(cells){
	var randIdx = getRandomInt(0,cells.length-1)
	return randIdx
}

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

// start timer of the game
function startTimer() {
    var startTime = Date.now()
    updateTimer(startTime)
}

// update the timer  
function updateTimer(startTime) {
    var elTimer = document.querySelector(".timer h3 span")
    gInterval = setInterval(function () {
        var timeNow = Date.now()
        var seconds = (timeNow - startTime) / 1000
        elTimer.innerText = seconds
    }, 100)
}

// stop the timer
function stopTimer() {
    clearInterval(gInterval)
}

