import { describe, it, expect } from "vitest";
import { chessboard } from ".";

describe("display chessboard", () => {
  it("should return a board with N x N size", () => {
    const size = 4;
    const board = chessboard(size);
    expect(board.length).toBe(size);
    board.forEach((row) => expect(row.length).toBe(size));
  });

  it("should return board with N queens", () => {
    const board = chessboard(4);
    const queenCount = board.reduce(
      (count, row) => count + (row.match(/#/g) || []).length,
      0
    );
    expect(queenCount).toBe(4);
  });

  it("should not place two queens in the same column", () => {
    const size = 4;
    const board = chessboard(size);
    for (let col = 0; col < size; col++) {
      let queenCountInCol = 0;
      for (let row = 0; row < size; row++) {
        if (board[row][col] === "#") {
          queenCountInCol++;
        }
      }
      expect(queenCountInCol).toBeLessThanOrEqual(1);
    }
  });

  it("should not place two queens on the same diagonal", () => {
    const size = 4;
    const board = chessboard(size);
    const diagonals = new Set<string>();

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (board[row][col] === "#") {
          const mainDiagonal = row - col;
          const antiDiagonal = row + col;
          expect(diagonals.has(`main-${mainDiagonal}`)).toBe(false);
          expect(diagonals.has(`anti-${antiDiagonal}`)).toBe(false);
          diagonals.add(`main-${mainDiagonal}`);
          diagonals.add(`anti-${antiDiagonal}`);
        }
      }
    }
  });
  it("should not place two queens on the same row", () => {
    const size = 5;
    const board = chessboard(size);
    for (let row = 0; row < size; row++) {
      let queenCountInRow = 0;
      for (let col = 0; col < size; col++) {
        if (board[row][col] === "#") {
          queenCountInRow++;
        }
      }
      expect(queenCountInRow).toBeLessThanOrEqual(1);
    }
  });
});
