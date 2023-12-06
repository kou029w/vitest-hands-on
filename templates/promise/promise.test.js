import { expect, test } from "vitest";

const fetchData = () => Promise.resolve(42);

test("データは42 - async/await", async () => {
  const data = await fetchData();
  expect(data).toBe(42);
});

test("データは42 - async/await with resolves", async () => {
  await expect(fetchData()).resolves.toBe(42);
});
