import { expect, test, vi } from "vitest";

const mockCallback = vi.fn();

test("関数は3回呼ばれます", () => {
  ["い", "ろ", "は"].forEach(mockCallback);
  expect(mockCallback.mock.calls.length).toBe(3);
});

test("最初の呼び出しのときの第1引数は「い」です", () => {
  ["い", "ろ", "は"].forEach(mockCallback);
  expect(mockCallback.mock.calls[0][0]).toBe("い");
});
