export function chessboard(n: number): string[] {
  const board: string[] = [];
  const queenPositions: boolean[][] = [];

  for (let i = 0; i < n; i++) {
    const row: boolean[] = [];
    for (let j = 0; j < n; j++) {
      row.push(false);
    }
    queenPositions.push(row);
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "O";
    }
    board.push(row);
  }
  let queensPlaced = 0;
  while (queensPlaced < n) {
    const row = Math.floor(Math.random() * n);
    const col = Math.floor(Math.random() * n);
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
const board = chessboard(4);
board.forEach((row) => console.log(row));
