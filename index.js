//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");

//Add validation when puting input

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "ID",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
  {
    type: "list",
    name: "addTeamMember",
    message: "Which type of team member would you like to add?",
    choices: [{ name: "Engineer" }, { name: "Intern" }, { name: "I don't want to add any more team members" }],
  },
];
