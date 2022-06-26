const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Sets office Number", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@example.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("name", 1, "test@example.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Gets Office Number", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@example.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
