const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //TODO:code goes here
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    //TODO:code goes here
    return this.school;
  }
    
}

module.exports = Intern;