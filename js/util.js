'use strict'

// get a copy of mat
function copyMat(mat) {
    var newMat = []
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = []
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j]
        }
    }
    return newMat
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
