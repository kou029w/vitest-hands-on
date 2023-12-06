import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";

/*
 * 実行順序:
 *   トップ - beforeAll → グループ1 - beforeAll
 *     → トップ - beforeEach → グループ1 - beforeEach
 *       → グループ1 - test 1
 *     → トップ - afterEach → グループ1 - afterEach
 *     → トップ - beforeEach → グループ1 - beforeEach
 *       → グループ1 - test 2
 *     → トップ - afterEach → グループ1 - afterEach
 *   → トップ - afterAll → グループ1 - afterAll
 */

beforeAll(() => console.log("トップ - beforeAll"));
afterAll(() => console.log("トップ - afterAll"));
beforeEach(() => console.log("トップ - beforeEach"));
afterEach(() => console.log("トップ - afterEach"));

describe("グループ1", () => {
  beforeAll(() => console.log("グループ1 - beforeAll"));
  afterAll(() => console.log("グループ1 - afterAll"));
  beforeEach(() => console.log("グループ1 - beforeEach"));
  afterEach(() => console.log("グループ1 - afterEach"));

  test("グループ1 - test 1", () => {
    // ...
  });

  test("グループ1 - test 2", () => {
    // ...
  });
});
