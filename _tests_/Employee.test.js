const Employee = require("../lib/Employee");

test(" adds 1 + 2 to equal 3", () => {
  expect(Employee(1, 2)).toBe(3);
});
