//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderHTML = require("./src/renderTemplate");

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
    name: "id",
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

function teamMembers() {
  this.team = [];
  this.manager;
  this.engineer;
  this.intern;
}

teamMembers.prototype.promptManager = function () {
  inquirer.prompt(managerQuestions).then(({ name, id, email, office }) => {
    this.manager = new Manager(name, id, email, office);
    this.team.push(this.manager);
    this.promptTeamMember();
  });
};

teamMembers.prototype.promptTeamMember = function () {
  inquirer
    .prompt({
      type: "list",
      name: "member",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    })
    .then(({ member }) => {
      if (member === "Engineer") {
        this.promptEngineer();
      } else if (member === "Intern") {
        this.promptIntern();
      } else {
        createFile(renderHTML(this.team));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

teamMembers.prototype.promptEngineer = function () {
  inquirer.prompt(engineerQuestions).then(({ name, id, email, github }) => {
    this.engineer = new Engineer(name, id, email, github);
    this.team.push(this.engineer);
    this.promptTeamMember();
  });
};

teamMembers.prototype.promptIntern = function () {
  inquirer.prompt(internQuestions).then(({ name, id, email, school }) => {
    this.intern = new Intern(name, id, email, school);
    this.team.push(new Intern(name, id, email, school));
    this.promptTeamMember();
  });
};

const createFile = (mainHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/team.html", mainHTML, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "teamFile created!",
      });
    });
  });
};

new teamMembers().promptManager();
