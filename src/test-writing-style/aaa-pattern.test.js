import { expect, test } from "vitest";

test("正しくJSONをパースできる", () => {
  // 準備
  const json = `{ "name": "Claude Monet", "birth": "1840" }`;

  // 実行
  const parsed = JSON.parse(json);

  // 検証
  expect(parsed).toEqual({ name: "Claude Monet", birth: "1840" });
});
