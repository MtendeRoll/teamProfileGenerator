const Intern = require("../lib/Intern");

test("Sets school", () => {
  const testValue = "UCT";
  const e = new Intern("name", 1, "test@example.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("name", 1, "test@example.com", "UCT");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCT";
  const e = new Intern("name", 1, "test@example.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
