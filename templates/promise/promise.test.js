/** @license https://github.com/facebook/jest/blob/master/LICENSE */

// ダミー
const fetchData = () => Promise.resolve("peanut butter");

test("the data is peanut butter - return promise", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter - return promise with resolves", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the data is peanut butter - async/await", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the data is peanut butter - async/await with resolves", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});
