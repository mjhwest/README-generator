//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//Create an array of questions for user input
//Question to include; 1) Title of the Project 2) Descripition of Project 3) Installation Steps 4) Usage Steps 5) License 6)Contibutors 7) Tests 8) Questions
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: "What is the title for this project?"
        },
        {
            type: 'inpuit',
            name: 'description',
            message: "Provide a description explaining your project"
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps required to use your project?'
        },
        {
            type: "list",
            name: "license",
            message: 'Please select the licensing required for this application',
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "Eclipse Public License 2.0",
                "Mozilla Publice License 2.0",
                "The Unlicense",
            ]
        },
        {
            type: "list",
            name: "contributions",
            message: "Are there any contribution guideliness that need to be followed?"
        },
        {
            type: "list",
            name: "test",
            message: "Are there any instructions in regards to testing?"
        },
        {
            type: "list",
            name: "email",
            message: "Please enter your email"
        },
        {
            type: "list",
            name: "git",
            message: "Please provide your GitHub Profile URL"
        },
    ]);
};







// TODO: Create a function to write README file
function writeToFile(fileName, data) {}









//Line 65 to end of mini project:
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();