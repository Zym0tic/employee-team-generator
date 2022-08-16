const inquirer = require("inquirer");
const fs = require("fs");
const writeHtml = require("./src/write");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// questions section 

const managerQuestions = [
  {
    type: "input",
    message: "Managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "Managers id?",
    name: "managerId",
  },
  {
    type: "input",
    message: "Managers email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Managers office number?",
    name: "managerOfficeNum",
  },
  {
    type: "confirm",
    message: "Would you like to add another team mate?",
    name: "addTeammate",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "Engineers name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Engineers id?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "Engineers email address?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Engineers Github username?",
    name: "engineerGithhub",
  },
  {
    type: "confirm",
    message: "Would you like to add another team mate?",
    name: "addTeammate",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "Interns name?",
    name: "internName",
  },
  {
    type: "input",
    message: "Interns id?",
    name: "internId",
  },
  {
    type: "input",
    message: "Interns email address?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Interns school name?",
    name: "internSchool",
  },
  {
    type: "confirm",
    message: "Would you like to add another team mate?",
    name: "addTeammate",
  },
];
const employeeType = [
  {
    type: "list",
    message: "what is the team mates position?",
    name: "employeeType",
    choices: ["engineer", "intern"],
  },
];

// create employees section 

const employees = [];

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.managerOfficeNum
    );
    employees.push(manager);
    if (response.addTeammate) {
      return getEmployeeType();
    };
      return writeHtml();
  });
};

function getEmployeeType() {
  inquirer.prompt(employeeType).then((response) => {
    if (response.employeeType === "engineer") {
      return getEngineer();
    };
      return getIntern();
  });
};

function getEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerId,
      response.engineerEmail,
      response.engineerGithub
    );
    employees.push(engineer);
    if (response.addTeammate) {
      return getEmployeeType();
    };
      return writeHtml();
  });
}

function getIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(
            response.internName,
            response.internId,
            response.internEmail,
            response.internSchool
        );
        employees.push(intern);
        if (response.addTeammate) {
            return getEmployeeType();
        };
        return writeHtml();
    })
}

// initialize app

init();
