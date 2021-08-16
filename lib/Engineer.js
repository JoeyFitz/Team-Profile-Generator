const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
      }

    getGithub(){
        return `${this.gitHub}`;
    }

    getRole(){
        return `${this.role}`;
    }
}

module.exports = Engineer;
