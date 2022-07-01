// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter projects title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a project description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide the installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How will the application be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the contribution guidelines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How will the application be tested?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like the application covered under?',
        name: 'license',
        choices: ['The MIT License', 'GNU General Public License version 3', 'other'],
    },
    {
        type: 'input',
        message: 'Enter the copyright year of the application (yyyy).',
        name: 'year',
    },
    {
        type: 'input',
        message: 'Enter the name of the author.',
        name: 'author',
    },
    {
        type: 'input',
        message: 'Please provide a Github username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide a valid email address.',
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