const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { getRandomValues } = require("crypto");

test("Can set office number via constructor argument", () => {
  const testValue = 111;
  const e = new Manager("Moo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //TODO;code goes here
  const testValue = "Manager";
  const e = new Manager("Moo", 1, "test@test.com", 111);
  //const e = new Manager("Moo", 1, "test@test.com", "111");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getofficeNumber()", () => {
  //TODO;code goes here
//   const testValue = 111;
  const testValue = "111";
  const e = new Manager("Moo", 1, "test@test.com", testValue);
  expect(e.getofficeNumber()).toBe(testValue);   
});