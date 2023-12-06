import { expect, test } from "vitest";
import sum from "./sum";

test("1と2の合計は3です", () => {
  expect(sum(1, 2)).toBe(3);
});
