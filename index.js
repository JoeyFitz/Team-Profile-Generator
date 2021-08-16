const inquirer = require ('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const commonQuestions = [
    {
        type: 'input',
        message: "What is the team member's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team member's ID?", 
        name: 'ID',
    },
    {
        type: 'input',
        message: "What is the team member's email address?",
        name: 'email',
    },
    {
        type: 'checkbox',
        message: "What is the team member's role?",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const internQuestion = 
    {
        type: 'input',
        message: "Which school does this team member attend?",
        name: 'school',
    };

const engineerQuestion =
    {
        type: 'input',
        message: "What is this team member's GitHub name?",
        name: 'GitHub',
    };

const managerQuestion =
    {
        type: 'input',
        message: "What is this team member's office number?",
        name: 'number',
    };

const promptUser = () => {
    inquirer
        .prompt(commonQuestions);
        .then((response) => {

        })
}
    const generateHTML = (answers) =>
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
        <h1 class="display-4">Hi! My name is ${answers.name}</h1>
        <p class="lead">I am from ${answers.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
        </ul>
    </div>
    </div>
</body>
</html>`;
  
// Bonus using writeFileAsync as a promise
const init = () => {
promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();