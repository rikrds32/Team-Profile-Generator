const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const team = []


const questions = [
    {
        type: "list",
        messege: "What is the employee role?",
        choices: ["Manager", "Intern", "Engineer"],
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
        when: (answer) => answer.role === "Manager"
    },
    {
        type: "input",
        message: "what is the github name?",
        name: "github",
        when: (answer) => answer.role === "Engineer"
    },
    {
        tyoe: "input",
        message: "what the school name?",
        name: "school",
        when: (answer) => answer.role === "Intern"
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
        if (res.role === "Manager") {
            const manager = new Manager(res.name, res.id, res.email, res.office);
            team.push(manager);
        } else if (res.role === "Engineer") {
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