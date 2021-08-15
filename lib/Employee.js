class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName(){
        return `${this.name}`;
    }

    getID(){
        return `${this.id}`;
    }

    getEmail(){
        return `${this.email}`;
    }

    getRole(){
        console.log(`My role is ${this}`); //?? it just needs to return 'Employee'
    }

  }
  module.exports = Employee;