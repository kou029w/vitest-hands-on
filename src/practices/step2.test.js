// isLeapYear.test.js
import isLeapYear from "./isLeapYear";

test("西暦年号が4で割り切れる年はうるう年", () => {
  expect(isLeapYear(2024)).toBe(true);
  expect(isLeapYear(2028)).toBe(true);
  expect(isLeapYear(2032)).toBe(true);
});

test("西暦年号が4で割り切れない年はうるう年でない", () => {
  expect(isLeapYear(2021)).toBe(false);
  expect(isLeapYear(2022)).toBe(false);
  expect(isLeapYear(2023)).toBe(false);
});

/** TODO:
ただし、西暦年号が100で割り切れる年はうるう年でない
  たとえば、西暦2100年、2200年、2300年は100で割り切れるので、うるう年ではありません。
ただし、西暦年号が400で割り切れる年はうるう年
  たとえば、西暦2000年、2400年、2800年は400で割り切れるので、うるう年です。
*/
