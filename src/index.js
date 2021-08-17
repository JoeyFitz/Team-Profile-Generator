const inquirer = require ('inquirer');
const fs = require('fs');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');

const team = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's ID?", 
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's officer number?",
        name: 'managerNumber',
    },
];
    
const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is your engineer's ID?", 
        name: 'engineerID',
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'githubUsername',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is your intern's ID?", 
        name: 'internID',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internSchool',
    },
];

const continueQuestion = 
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'continue',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    } 


const initialPrompt = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerResponse) => {
            let teammate = new Manager(managerResponse.managerName, managerResponse.managerID, managerResponse.managerEmail, managerResponse.managerNumber);
            console.log(teammate);
            team.push(teammate);
            beginningHTML();
            additionalHTML(teammate);
            continuePrompt();
        })
    }

const continuePrompt = () => {
    inquirer
        .prompt(continueQuestion)
        .then((continueResponse) => {
            if(continueResponse.continue === "I don't want to add any more team members"){
                endingHTML();
                return
            }
            if(continueResponse.continue === 'Engineer'){
                engineerPrompt();
            }
            if(continueResponse.continue === 'Intern'){
                internPrompt();
            }
        })
}

const engineerPrompt = () => {
    inquirer    
        .prompt(engineerQuestions)
        .then((engineerResponse) => {
            let teammate = new Engineer(engineerResponse.engineerName, engineerResponse.engineerID, engineerResponse.engineerEmail, engineerResponse.githubUsername)
            console.log(teammate);
            team.push(teammate);
            additionalHTML(teammate);
            continuePrompt();
        })
}

const internPrompt = () => {
    inquirer    
        .prompt(internQuestions)
        .then((internResponse) => {
            let teammate = new Intern(internResponse.internName, internResponse.internID, internResponse.internEmail, internResponse.internSchool)
            console.log(teammate);
            team.push(teammate);
            additionalHTML(teammate);
            continuePrompt();
        })
}

const beginningHTML = () => {
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile('../dist/index.html', html, (err) => err ? console.log(err): console.log('Success!')) 
}

const additionalHTML = (teammate) => {
    return new Promise((resolve, reject) => {
        const name = teammate.getName();
        const role = teammate.getRole();
        const id = teammate.getID();
        const email = teammate.getEmail();
        let newHTML = "";
        if(role === 'Engineer') {
            const github = teammate.getGithub();
            newHTML = 
            `
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                        <h5 class="card-header">${name}<br /><br />Engineer</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a> </li>
                            <li class="list-group-item">GitHub: <a href= "https://github.com/${github}">${github}</a> </li>
                        </ul>
                    </div>
                </div>`;
        }
        else if (role === 'Intern') {
            const school = teammate.getSchool();
            newHTML =
            `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Intern</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a> </li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>`;
        }
        else {
            const officeNumber = teammate.getOfficeNumber();
            newHTML = 
            `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a> </li>
                        <li class="list-group-item">Office Phone: ${officeNumber}</li>
                    </ul>
                </div>
            </div>`
        }
        fs.appendFile('../dist/index.html', newHTML, (err) => {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    })
}

const endingHTML = () => {
    let html = 
    `       </div>
        </div>
    </body>
    </html>`;
    fs.appendFile('../dist/index.html', html, (err) => err ? console.log(err): console.log('Success!'))
}
  
const init = () => {
    console.log("Please build your team.");
    initialPrompt();
};

init();