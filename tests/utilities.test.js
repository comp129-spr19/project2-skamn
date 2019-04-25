const { getPreviousDate } = require("../js/utilities");

test("2019-4-24 previous date should be 2019-4-23", () => {
  const testDate = new Date("2019-4-24");
  expect(getPreviousDate(testDate).toLocaleDateString()).toBe("2019-4-23");
});

test("2019-4-1 previous date should be 2019-3-31", () => {
  const testDate = new Date("2019-4-1");
  expect(getPreviousDate(testDate).toLocaleDateString()).toBe("2019-3-31");
});

test("2019-1-1 previous date should be 2018-12-31", () => {
  const testDate = new Date("2019-1-1");
  expect(getPreviousDate(testDate).toLocaleDateString()).toBe("2018-12-31");
});
