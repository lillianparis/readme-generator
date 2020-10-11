// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// npn install first

let inquirer = require("inquirer");
let fs = require('fs');

// Questions for the user 
inquirer
    .prompt([
        /* Pass your questions in here */
      
        {
            type: "input",
            name: "Github",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is your email adress?"
        },
        {
            type: "input",
            name: "Title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Please write a short description of your project"
        },
        {
            type: "input",
            name: "Liscence",
            message: "Please pick a liscence",
            choices: [
                "MIT",
                "Mozilla",
                "Apache License 2.0",
                "Boost Software License 1.0",
            ],
        },
        {
            type: "input",
            name: "Dependancies",
            message: "What command should be run to install dependancies?"
            // example npm install
        },
        {
            type: "input",
            name: "Tests",
            message: "What command should be run to run tests"
            // example npm test
        },
        {
            type: "input",
            name: "Usage",
            message: "What does the user need to know about using your repo?"
        },
        {
            type: "input",
            name: "Contributing",
            message: "What does the user need to know about contributing to the repo?"
        },
        // starts generating readme
    ])


    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

    function init() {
        inquirer.prompt(questions)
        .then((inquireResponses) => {
            console.log("Generating Readme...")
        })
    }
