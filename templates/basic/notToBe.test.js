import { expect, test } from "vitest";

test("2と2の和は5ではない", () => {
  expect(2 + 2).not.toBe(5);
});
