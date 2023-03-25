// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'what is your project name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'what is your description of your project ?',
        name: 'description',
    },
    {
        type: 'list',
        message: 'what kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'apache', 'mozilla', 'GPL','BSD','none']
    },
    {
        type: 'input',
        message: 'what command should be run to install dependencies?',
        name: 'dependencies',
    },
    {
        type: 'input',
        message: 'what is the usage of your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'how do you want to contribute to the repo?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'how do you want to test your application?',
        name: 'test',
    },

    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log("Something wrong happened!")
        } else {
            console.log("README successfully generated!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);

            const data = generateMarkdown(answers)

            writeToFile("README.md", data)
        })
}

// Function call to initialize app
init();
