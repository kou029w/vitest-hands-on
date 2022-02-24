/** @license https://github.com/facebook/jest/blob/master/LICENSE */

// ダミー
const fetchData = (callback) => callback("peanut butter");

// 実行しないでください!
test.skip("the data is peanut butter", () => {
  function callback(data) {
    expect(data).toBe("peanut butter");
  }

  fetchData(callback);
});

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
