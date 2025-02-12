import { describe, it, expect } from "vitest";
import { chessboard } from "./index";

describe("display chessboard", () => {
  it("should return an empty array", () => {
    expect(chessboard()).toStrictEqual([]);
  });
});
