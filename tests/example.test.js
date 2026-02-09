const { calculateFinalAmount } = require("../src/pricing");



test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
  expect(() => calculateFinalAmount("100", "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
  expect(() => calculateFinalAmount(NaN, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("Check for invalid coupon", () => {
  expect(() => calculateFinalAmount(100, "INVALID")).toThrow(
    "Invalid Coupon",
  );
});

test("check for normalized coupon", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
  
});
test("check for normalized coupon", () => {
  expect(calculateFinalAmount(100, "flat50")).toBe(50);
  
});

test("check for 5% discount on subtotal >= 1000", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
  expect(calculateFinalAmount(1500)).toBe(1425);
});

test("check for no coupon", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});
