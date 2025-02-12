"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessboard = chessboard;
function chessboard(n) {
    var board = [];
    var queenPositions = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            row.push(false);
        }
        queenPositions.push(row);
    }
    for (var i = 0; i < n; i++) {
        var row = "";
        for (var j = 0; j < n; j++) {
            row += "O";
        }
        board.push(row);
    }
    var queensPlaced = 0;
    while (queensPlaced < n) {
        var row = Math.floor(Math.random() * n);
        var col = Math.floor(Math.random() * n);
        if (!queenPositions[row][col]) {
            queenPositions[row][col] = true;
            board[row] =
                board[row].substring(0, col) + "#" + board[row].substring(col + 1);
            queensPlaced++;
        }
    }
    return board;
}
console.log(chessboard(4));
var board = chessboard(4);
board.forEach(function (row) { return console.log(row); });
