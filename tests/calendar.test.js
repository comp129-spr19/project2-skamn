const { getDaysInMonth } = require("../js/calendar");

test("January 2019 should have 31 days", () => {
  expect(getDaysInMonth(0, 2019)).toBe(31);
});

test("April 2019 should have 30 days", () => {
  expect(getDaysInMonth(3, 2019)).toBe(30);
});

test("February 2019 should have 28 days", () => {
  expect(getDaysInMonth(1, 2019)).toBe(28);
});

test("March 2018 should have 31 days", () => {
  expect(getDaysInMonth(2, 2018)).toBe(31);
});
