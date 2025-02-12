export function chessboard(n: number): string[] {
  const board: string[] = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "O";
    }
    board.push(row);
  }
  return board;
}

console.log(chessboard(4));
