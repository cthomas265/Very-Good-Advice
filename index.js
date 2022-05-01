// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project."
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license, if any.",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide any contributors and/or collaborators for your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide instructions for running tests for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for how to use your project.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        fs.writeFileSync("./dist/README.md", generateMarkdown(response), function (err) {
            if (err) {
                throw err;
            };
        })

    })
};
// Function call to initialize app
init();