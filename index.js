const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestions = [
    {
        type: 'input',
        message: 'Managers name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Managers id?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'Managers email address?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Managers office number?',
        name: 'managerOfficeNum',
    },
    {
        type: 'confirm',
        message: 'Would you like to add another team mate?',
        name: 'addTeammate',
    },
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineers name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Engineers id?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'Engineers email address?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Engineers Github username?',
        name: 'engineerGithhub',
    },
    {
        type: 'confirm',
        message: 'Would you like to add another team mate?',
        name: 'addTeammate',
    },
];
const internQuestions = [
    {
        type: 'input',
        message: 'Interns name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'Interns id?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'Interns email address?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Interns school name?',
        name: 'engineerGithhub',
    },
    {
        type: 'confirm',
        message: 'Would you like to add another team mate?',
        name: 'addTeammate',
    },
];
const employeeType = [
    {
        type: 'list',
        message: 'what is the team mates position?',
        name: 'employeeType',
        choices: ['engineer', 'intern'],
    }
];

const employees = [];


function init() {
    inquirer.prompt(managerQuestions)
.then((response) => {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);
    employees.push(manager);
    if (response.addTeammate) {
        getEmployeeType ();
    } else {
        writeHtml();
    }
});
};

function getEmployeeType () {
    inquirer.prompt(employeeType)
    .then((reaponse) => {
    
    })
}



function writeHtml() {

}


init();