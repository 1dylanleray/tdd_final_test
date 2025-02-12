"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessboard = chessboard;
function chessboard(n) {
    var board = [];
    for (var i = 0; i < n; i++) {
        var row = "";
        for (var j = 0; j < n; j++) {
            row += "O";
        }
        board.push(row);
    }
    function isValid(board, row, col) {
        for (var i = 0; i < row; i++) {
            if (board[i][col] === "#")
                return false;
        }
        for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "#")
                return false;
        }
        for (var i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "#")
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
console.log(chessboard(4));
var board = chessboard(4);
board.forEach(function (row) { return console.log(row); });
