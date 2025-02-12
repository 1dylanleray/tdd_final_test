import { describe, it, expect } from "vitest";
import { chessboard } from ".";

describe("display chessboard", () => {
  it("should return an empty array of n x n cases", () => {
    expect(chessboard(4)).toStrictEqual(["OOOO", "OOOO", "OOOO", "OOOO"]);
  });
});
