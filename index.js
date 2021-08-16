const inquirer = require ('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

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
    {
        type: 'checkbox',
        message: "Which type of team member would you like to add?",
        name: 'memberType',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
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
    {
        type: 'checkbox',
        message: "Which type of team member would you like to add?",
        name: 'memberType',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
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
    {
        type: 'checkbox',
        message: "Which type of team member would you like to add?",
        name: 'memberType',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
];

const promptUser = () => {
    inquirer
        .prompt(initialQuestions)
        .then((response) => {
            if(response.role === 'Manager') {
                inquirer
                    .prompt(managerQuestion)
                    .then(managerResponse)
            }
            else if(response.role === 'Engineer') {
                inquirer
                    .prompt(engineerQuestion)
            }
            else if(response.role === 'Intern') {
                inquirer
                    .prompt(internQuestion)
            }
        })




const generateHTML = (responses) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi! My name is ${responses.name}</h1>
        <p class="lead">I am from ${responses.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${responses.github}</li>
        <li class="list-group-item">LinkedIn: ${responses.linkedin}</li>
        </ul>
    </div>
    </div>
</body>
</html>`;
  
// Bonus using writeFileAsync as a promise
const init = () => {
    console.log("Please build your team");
    promptUser()
        .then((responses) => writeFileAsync('index.html', generateHTML(responses)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();