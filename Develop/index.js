//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project?',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation instructions for your project?',
            validate: instructionsInput => {
                if (instructionsInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?',
            validate: usageInput => {
                if (usageInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the contribution guidelines for your project?',
            validate: guidelinesInput => {
                if (guidelinesInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions for your project?',
            validate: testInput => {
                if (testInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: "What license, if any, did you use for your application?",
            choices: ['Academic Free License', 'Apache License', 'Creative Common License', 'Eclipse Public License', 'Mozilla Public License']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
            validate: usernameInput => {
                if (usernameInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput){
                    return true;
                }
                else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        }
    ]);
};

//Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) throw new Error(err);

        console.log('Readme created, check it out!');
    })
};

//Create a function to initialize app
userQuestions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeToFile(data);
    })

// Function call to initialize app
//init();



