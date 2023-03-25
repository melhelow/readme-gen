// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];



inquirer
  .prompt([
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
      choices: ['MIT','apache','mozilla','none']
    },
  ])
  .then(answers => {
    console.log(answers);

    const data = `
# ${answers.project}
![badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=blue)

## Username
${answers.username}

## Description
${answers.description}

## Installation
Installation steps..

## Usage


## Contributing


## Tests


`;

    fs.writeFile("README.md", data, function(err) {
        if(err) {
            console.log("Something wrong happened!")
        } else {
            console.log("README successfully generated!")
        }
    })
  })


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
