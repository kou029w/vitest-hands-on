// isLeapYear.test.js
import { expect, test } from "vitest";
import isLeapYear from "./isLeapYear";

test("西暦年号が4で割り切れる年はうるう年", () => {
  expect(isLeapYear(2024)).toBe(true);
  expect(isLeapYear(2028)).toBe(true);
  expect(isLeapYear(2032)).toBe(true);
});

/** TODO:
西暦年号が4で割り切れない年はうるう年でない
  たとえば、西暦2021年、2022年、2023年は4で割り切れないので、うるう年ではありません。
ただし、西暦年号が100で割り切れる年はうるう年でない
  たとえば、西暦2100年、2200年、2300年は100で割り切れるので、うるう年ではありません。
ただし、西暦年号が400で割り切れる年はうるう年
  たとえば、西暦2000年、2400年、2800年は400で割り切れるので、うるう年です。
*/
