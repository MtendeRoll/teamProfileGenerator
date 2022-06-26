const Engineer = require("../lib/Engineer");

test("Set's github user", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("name", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("name", 1, "test@example.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Get's github users name", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("name", 1, "test@example.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
