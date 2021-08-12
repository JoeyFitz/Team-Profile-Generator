const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
      }

    getName(){

    }

    getID(){

    }

    getEmail(){

    }

    getRole(){
    // needs to be overriden to return 'Manager'
    }


}