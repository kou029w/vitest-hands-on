/** @license https://github.com/facebook/jest/blob/master/LICENSE */

// ダミー
const initializeCityDatabase = async () => {
  console.log("Cityデータベースの初期化処理");
};
const clearCityDatabase = async () => {
  console.log("Cityデータベースの消去");
};
const isCity = (city) => {
  // …なにかデータベースに依存する処理

  console.log(`${city} は都市です`);
  return true;
};

beforeEach(async () => {
  await initializeCityDatabase();
});

afterEach(async () => {
  await clearCityDatabase();
});

beforeAll(async () => {
  await initializeCityDatabase();
});

afterAll(async () => {
  await clearCityDatabase();
});

// ダミー
const initializeFoodDatabase = async () => {
  console.log("Foodデータベースの初期化処理");
};
const isValidCityFoodPair = () => true;

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // このdescribeブロックのテストにのみ適用されます
  beforeEach(async () => {
    await initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
