"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessboard = chessboard;
function chessboard(n) {
    var board = [];
    // Initialize the board with empty spaces
    for (var i = 0; i < n; i++) {
        var row = "";
        for (var j = 0; j < n; j++) {
            row += "O";
        }
        board.push(row);
    }
    function isValid(board, row, col) {
        // Check the column
        for (var i = 0; i < row; i++) {
            if (board[i][col] === "#")
                return false;
        }
        return true;
    }
    function solve(row) {
        if (row === n) {
            return true;
        }
        for (var col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row] =
                    board[row].substring(0, col) + "#" + board[row].substring(col + 1);
                if (solve(row + 1)) {
                    return true;
                }
                board[row] =
                    board[row].substring(0, col) + "O" + board[row].substring(col + 1);
            }
        }
        return false;
    }
    solve(0);
    return board;
}
console.log(chessboard(4)); // Example usage
var board = chessboard(4);
board.forEach(function (row) { return console.log(row); });
