const Employee = require("./Employee");

class Manager extends Employee {
//TODO;code goes here
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getofficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;