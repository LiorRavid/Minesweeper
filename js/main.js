'use strict'

const MINE = '💣';
const FLAG = '🚩';

var gBoard

var gLevel = { 
    SIZE: 4,
    MINES: 2
}

var gGame = { 
    isOn: false,
    shownCount: 0, 
    markedCount: 0, 
    secsPassed: 0 
}

function init(){
    gBoard=buildBoard()
    gBoard[2][2].value = MINE
    gBoard[0][3].value = MINE
    gBoard = setMinesNegsCount(gBoard)
    renderBoard(gBoard)
    console.table(gBoard)
}


// Builds the board, Set mines at random locations and return the created board
function buildBoard() {
    var board = []
    for (var i = 0; i < 4; i++) {
        board.push([])
        for (var j = 0; j < 4; j++) {
            board[i][j] = createCell()
        }
    }
    return board
}

// create object in cell
function createCell(){
    var cell={
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: true,
        value:''
    }
    return cell
}

// Render the board as a <table> to the page
function renderBoard(board) {
    console.table(board)
    var strHtml = ''

    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            strHtml += `<td data-i="${i}" data-j="${j}"
            onclick="cellClicked(this,${i},${j})"
            ><span hidden>${cell.value}</span></td>`
        }
        strHtml += '</tr>'
    }
    console.log('strHtml', strHtml)
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHtml
}

// render cell in the DOM
// function renderCell(i, j, value) {
//     var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
//     // console.log('elCell', elCell);
//     elCell.innerText = value;
//     elCell.classList.remove('occupied');

// }

// Count mines around each cell and set the cell's minesAroundCount
function setMinesNegsCount(board){
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[0].length;j++){
        var negsCount = countNeighbors(i,j,board)
        board[i][j].minesAroundCount = negsCount
        if(negsCount>0)board[i][j].value = negsCount
        }
    }
    return board
}

// Called when a cell (td) is clicked
function cellClicked(elCell,cellI, cellJ){
    if(gBoard[cellI][cellJ].value!== MINE && gBoard[cellI][cellJ].value!==''){
        gBoard[cellI][cellJ].isShown = true
        showCellValue(cellI,cellJ)
    }
}

// show the value in the cell
function showCellValue(cellI,cellJ) { 
    document.querySelector(`[data-i="${cellI}"][data-j="${cellJ}"] span`).hidden = false    
}

// Called on right click to mark a cell (suspected to be a mine)
// function cellMarked(elCell)

// 
// function checkGameOver()

// When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors
// function expandShown(board, elCell, i, j)