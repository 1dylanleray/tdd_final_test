import { describe, it, expect } from "vitest";
import { chessboard } from ".";

describe("display chessboard", () => {
  it("should return a board with n size", () => {
    const size = 5;
    const board = chessboard(size);
    expect(board.length).toBe(size);
    board.forEach((row) => expect(row.length).toBe(size));
  });
});
