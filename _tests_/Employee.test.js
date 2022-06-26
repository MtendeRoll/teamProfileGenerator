const Employee = require("../lib/Employee");

test("Creates and employee object", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Sets employee namee", () => {
  const name = "Mtende";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set's employee id", () => {
  const testValue = 100;
  const e = new Employee("name", testValue);
  expect(e.id).toBe(testValue);
});

test("Sets email", () => {
  const testValue = "test@test.com";
  const e = new Employee("name", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Gets name", () => {
  const testValue = "Mtende";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Gets Id", () => {
  const testValue = 100;
  const e = new Employee("name", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Gets email", () => {
  const testValue = "test@example.com";
  const e = new Employee("name", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Mtende", 1, "test@example.com");
  expect(e.getRole()).toBe(testValue);
});
