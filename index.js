
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter projects title.'
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description.'
      
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions.'
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the application be used?'
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide the contribution guidelines.'
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How will the application be tested?'
       
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like the application covered under?',
        choices: ['The MIT License', 'GNU General Public License version 3', 'other']
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the copyright year of the application (yyyy).'
        
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter the name of the author.'
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a Github username.'
       
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a valid email address.'
        
    },
];


function writeToFile(fileName, data) {
   

    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log('File successfully generated')
    );
};


function init() {
    const askQuestions = () => {
        return inquirer.prompt(questions);
    };

    askQuestions().then((response) => writeToFile('Sample-README.md', response))
};


init();