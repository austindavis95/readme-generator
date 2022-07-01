// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Which is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Which are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Which are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can the application be tested?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license is the application covered under?',
        name: 'license',
        choices: ['The MIT License', 'GNU General Public License version 3', 'other'],
    },
    {
        type: 'input',
        message: 'Which is the copyright year of the application (yyyy)?',
        name: 'year',
    },
    {
        type: 'input',
        message: 'Who is the author of the application?',
        name: 'author',
    },
    {
        type: 'input',
        message: 'Which is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Which is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const myREADME = generateMarkdown(data);

    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log('File successfully generated')
    );
};

// TODO: Create a function to initialize app
function init() {
    const promptQuestions = () => {
        return inquirer.prompt(questions);
    };

    promptQuestions()
        .then((answers) => writeToFile('Sample-README.md', answers))
};

// Function call to initialize app
init();