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
    return board;
}
console.log(chessboard(4));
var board = chessboard(4);
board.forEach(function (row) { return console.log(row); });
