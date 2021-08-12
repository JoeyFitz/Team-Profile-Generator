const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
      }

    getName(){

    }

    getID(){

    }

    getEmail(){

    }

    getGithub(){

    }

    getRole(){
    // needs to be overriden to return 'Engineer'
    }
}