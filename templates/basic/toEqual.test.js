import { expect, test } from "vitest";

test("プロパティを代入する", () => {
  const data = { name: "Claude Monet" };
  Object.assign(data, { birth: "1840" });
  expect(data).toEqual({ name: "Claude Monet", birth: "1840" });
});
