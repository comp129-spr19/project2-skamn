const { daysInMonth } = require("../js/calendar");

test("January 2019 should have 31 days", () => {
  expect(daysInMonth(0, 2019)).toBe(31);
});

test("April 2019 should have 30 days", () => {
  expect(daysInMonth(3, 2019)).toBe(30);
});

test("February 2019 should have 28 days", () => {
  expect(daysInMonth(1, 2019)).toBe(28);
});
