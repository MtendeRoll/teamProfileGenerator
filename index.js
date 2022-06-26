//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Add validation when puting input

// An array of questions for user input
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team manager's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "ID",
    message: "What is the team manager's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's id");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    validate: (officeNumInput) => {
      if (officeNumInput) {
        return true;
      } else {
        console.log("Please enter the team manager's office number");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "addTeamMember",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the engineer's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's id number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the engineer's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the engineer's GitHub username!");
        return false;
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the intern's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the intern's id number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the intern's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the intern's school!");
        return false;
      }
    },
  },
];

// A function to write team file

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/" + fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// A function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      writeToFile("team.html", Employee(answers));
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
