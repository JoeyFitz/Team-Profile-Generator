const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super (name, id, email);
        this.school = school;
      }

    getName(){

    }

    getID(){

    }

    getEmail(){

    }

    getSchool(){

    }

    getRole(){
    // needs to be overriden to return 'Intern'
    }
}