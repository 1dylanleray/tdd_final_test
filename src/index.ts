export function chessboard(n: number): string[] {
  const board: string[] = [];

  // Initialize the board with empty spaces
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "O";
    }
    board.push(row);
  }

  function isValid(board: string[], row: number, col: number): boolean {
    // Check the column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "#") return false;
    }

    return true;
  }

  function solve(row: number): boolean {
    if (row === n) {
      return true;
    }

    for (let col = 0; col < n; col++) {
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
const board = chessboard(4);
board.forEach((row) => console.log(row));
