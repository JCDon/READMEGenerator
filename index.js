const fs = require("fs");
const inquirer = require("inquirer");

// npm installs

inquirer.prompt([
    // the title info
    {
        type: "input",
        // user can input
        message: "What is your project title?",
        name: "title"
    },
    // description
    {
        type: "input",
        //this asks the questionsd
        message: "Describe your project in a few words...",
        name: "description",
    },
    // application links
    {
        type: "input",
        message: "Please link in your GitHub url",
        // this is the name in the node list
        name: "repo",
    },
    {
        type: "input",
        message: "Please link in your deployed url",
        name: "app",
    },
    // 3 steps for how to install the project
    {
        type: "input",
        message : "What is step 1?",
        name: "step1",
    },
    {
        type: "input",
        message : "What is step 2?",
        name: "step2",
    },
    {
        type: "input",
        message : "What is step 3?",
        name: "step3",
    },
    // usage information
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    // this is the credits input
    {
        type: "input",
        message: "Any person or product worth special mentioning?",
        name: "contribs"
    },
    {
        type: "input",
        message: "What tests did you run?",
        name: "test",
    },
    // license input
    {
        type: "input",
        message: "What licensing should we include?",
        name: "license"
    },
    //github username
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    // user git hub link
    {
        type: "input",
        message: "What is your GitHub profile link?",
        name: "userGit"
    },
    // user email
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
]).then(answers => {
    const readme = 
`# ${answers.title}

## license 

    ${answers.license}

## Description

    ${answers.description}

    These are my application links:

        Repository - ${answers.repo}
        Deployed App - ${answers.app}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

    To use my project you must:

    1. ${answers.step1}

    2. ${answers.step2}

    3. ${answers.step3}

    
## Usage

    ${answers.usage}
    
## Contributing

    ${answers.contribs}
    
## Tests

    The tests we ran were:

        ${answers.test}
    
## Questions

    Based on your convenience you may...

        reach me via GitHub (${answers.username}):
        The link is ${answers.userGit}

        or

        reach me via email at ${answers.email}


`;
                                                        // allows the function to run with a error call back
                                                        // will respond no error if it runs properly
    fs.writeFile("README.md", readme,  (err) => err ? console.error(err): console.log("no error"));
});