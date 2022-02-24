/** @license https://github.com/facebook/jest/blob/master/LICENSE */

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

test("このモック関数は2回呼ばれます", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("このモック関数の最初の呼び出しのときの第1引数はゼロです", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test("このモック関数の2回目の呼び出しのときの第1引数は1です", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test("このモック関数の最初の呼び出しのときの戻り値は42です", () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});
