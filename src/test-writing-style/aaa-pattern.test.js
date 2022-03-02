test("正しくJSONをパースできる", () => {
  // 準備
  const json = `{ "name": "太郎", "age": 20 }`;

  // 実行
  const parsed = JSON.parse(json);

  // 検証
  expect(parsed).toEqual({ name: "太郎", age: 20 });
});
