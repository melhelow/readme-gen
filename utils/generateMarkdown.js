// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const data = `
# ${answers.project}
![badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=blue)

## Username
${answers.username}

## Description
${answers.description}

## Installation
${answers.dependencies}

## Usage
${answers.usage}


## Contributing
${answers.contribute}

## Tests
${answers.test}


`;

  return data;

}





module.exports = generateMarkdown;
