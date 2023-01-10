//TODO:  Include packages needed for this application
const generateMarkdown = require('/utls/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquerer')

//todo: Create an array of questions for the user input]
const questions = [
    'What is your GitHub username?',
    'What is your email?',
    'What is the name of your project',
    'What is the description of your project?',
    'Which license would you like to choose?',
    'What instructions should be added for installation?',
    'How should this porject be used?',
    'How should users contribute to the project if they would like to?'
];

//todo: function to write a README file
function writeToFile(data) {
    fs.writeFile('./README>md', generateMardown(data), err => err ? console.err(err) : console.log("Success!"))
}

//todo: function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description'
        },
        {
            type: 'list',
            message: questions[4],
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v2', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'guidelines'
        },
    ]).then((data) => writeToFile(data))
}

//call function for initialization
init();