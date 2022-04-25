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
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
                fs.writeFileSync("README3.md", generateMarkdown(response), function (err) {
                    if (err) {
                        throw err;
                    };
                })

            }
    )};
            // Function call to initialize app
            init();