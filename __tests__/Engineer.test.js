const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  //TODO;code goes here
  const testValue = "Eoo";
  const e = new Engineer("Eoo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  //TODO;code goes here
  const testValue = "Engineer";
  const e = new Engineer("Eoo", 1, "test@test.com", "Eoo");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  //TODO;code goes here
  const testValue = "Eoo";
  const e = new Engineer("Eoo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});