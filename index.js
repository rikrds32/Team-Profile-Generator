const Manager = require("./lib/Manager");
const Engenieer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const team = []
const render = require("./lib/htmlRenderer");

const questions = [
    {
        type: "list",
        messege: "What is the employee role?",
        choices: ["manager", "intern", "engineer"],
        name: "role"
    },
    {
        type: "input",
        message: "What is the name?",
        name: "name"
    },
    {
        type: "input",
        message: "what is the id?",
        name: "id"
    },
    {
        type: "input",
        message: "what is the e-mail?",
        name: "email"
    },
    {
        type: "input",
        message: "what is the office number?",
        name: "oficceNumber",
        when: (answer) => answer.role === "manager"
    },
    {
        type: "input",
        message: "what is the github name?",
        name: "github",
        when: (answer) => answer.role === "engineer"
    },
    {
        tyoe: "input",
        message: "what the school name?",
        name: "school",
        when: (answer) => answer.role === "intern"
    },
    {
        type: "list",
        message: "do you want to add more?",
        choices: ["yes", "no"],
        name: "more"
    }
]

function showQuestions() {
    inquirer.prompt(questions).then(res => {
        if (res.role === "manager") {
            const manager = new Manager(res.name, res.id, res.email, res.office);
            team.push(manager);
        } else if (res.role === "engineer") {
            const engineer = new Engineer(res.name, res.id, res.email, res.github);
            team.push(engineer);
        } else {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            team.push(intern);
        }
        if (res.more === "yes") {
            showQuestions();
        } else {
            generatePage();
        }
    })
}

showQuestions();

function generatePage() {
    const html = render(team);
    fs.writeFile(distPath, html, (err) => 
        err ? console.error(err) : console.log("success")
    );
}