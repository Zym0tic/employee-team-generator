const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super()
        this.school = school;
    }
}

const Intern = new Intern();