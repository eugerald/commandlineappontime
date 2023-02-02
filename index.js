const inquirer = require("inquirer")
const Manager = require("./library/Manager")
const Engineer = require("inquirer")
const Intern = require("./library/Intern")
const fs = require("fs")
let engineerHTML =""
let managerHTML = ""
function init() {
    inquirer.createPromptModule([
        {
            type: "list",
            name: "options",
            message: "Please choose one",
            choices: ["Add Engineer", "Add Intern", "Add Manager", "Generate HTML"]
        }
    ]).then(response => {
        switch (response.options) {
            case "Add Engineer":
                addEngineer()
                break;
            case "Add Intern":
                addIntern()
                break;
            case "Add Manager":
                addManager()
                break;
            case "Generate HTML":
                addGenerateHTML()
                break;


        }
    })
}

function addEngineer(){
    console.log("----Add Engineer-----")
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name: ",

        },
        {
            type:"input",
            name:"id",
            message:"Enter id ",

        },
        {
            type:"input",
            name:"email",
            message:"Enter email: ",

        },
        {
            type:"input",
            name:"github",
            message:"Enter github: ",

        },
    ]).then(response =>{
        const hireEngineer = new Engineer(response.name,response.id,response.email, response.github)
        console.log(hireEngineer)
        engineerHTML += `
        
        <div class="card" style="width: 18rem;">
<h2>  Manager</h2>
  <div class="card-body">
    <h5 class="card-title">${hireEngineer.name}</h5>
    <h6 class="card-title">ID: ${hireengineer.id}</h2>
    <p class="card-text">Email: <a href="mailto:${hireEngineer.email}">Email: ${hireEngineer.email}</a></p>
    <a href="https://github.com/${hireEngineer.github}" class="btn btn-primary">githubprofile</a>
  </div>
</div>`
    })
}



function addManager(){
    console.log("----Add Engineer-----")
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name: ",

        },
        {
            type:"input",
            name:"id",
            message:"Enter id ",

        },
        {
            type:"input",
            name:"email",
            message:"Enter email: ",

        },
        {
            type:"input",
            name:"officenumber",
            message:"Enter office number: ",

        },
    ]).then(response =>{
        const manager = new manager(response.name,response.id,response.email, response.officenumber)
        console.log(manager)
        engineerHTML += `
        
        <div class="card" style="width: 18rem;">
<h2>  Manager</h2>
  <div class="card-body">
    <h5 class="card-title">${hireEngineer.name}</h5>
    <h6 class="card-title">ID: ${hireengineer.id}</h2>
    <p class="card-text">Email: <a href="mailto:${hireEngineer.email}">Email: ${hireEngineer.email}</a></p>
    <a href="https://github.com/${hireEngineer.github}" class="btn btn-primary">githubprofile</a>
  </div>
</div>`
    })
}
function addEngineer(){
    console.log("----Add  Intern-")
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name: ",

        },
        {
            type:"input",
            name:"id",
            message:"Enter id ",

        },
        {
            type:"input",
            name:"email",
            message:"Enter email: ",

        },
        {
            type:"input",
            name:"github",
            message:"Enter github: ",

        },
    ]).then(response =>{
        const hireEngineer = new Engineer(response.name,response.id,response.email, response.github)
        console.log(hireEngineer)
        engineerHTML += `
        
        <div class="card" style="width: 18rem;">
<h2>  Manager</h2>
  <div class="card-body">
    <h5 class="card-title">${hireEngineer.name}</h5>
    <h6 class="card-title">ID: ${hireengineer.id}</h2>
    <p class="card-text">Email: <a href="mailto:${hireEngineer.email}">Email: ${hireEngineer.email}</a></p>
    <a href="https://github.com/${hireEngineer.github}" class="btn btn-primary">githubprofile</a>
  </div>
</div>`
    })
}


function addIntern(){
    console.log("----addIntern-----")
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name: ",

        },
        {
            type:"input",
            name:"id",
            message:"Enter id ",

        },
        {
            type:"input",
            name:"email",
            message:"Enter email: ",

        },
        {
            type:"input",
            name:"schoolname",
            message:"schoolname",

        },
    ]).then(response =>{
        const hireEngineer = new Engineer(response.name,response.id,response.email, response.schoolname)
        console.log(hireEngineer)
        engineerHTML += `
        
        <div class="card" style="width: 18rem;">
<h2>  Manager</h2>
  <div class="card-body">
    <h5 class="card-title">${hireEngineer.name}</h5>
    <h6 class="card-title">ID: ${hireengineer.id}</h2>
    <p class="card-text">Email: <a href="mailto:${hireEngineer.email}">Email: ${hireEngineer.email}</a></p>
    <a href="https://github.com/${hireEngineer.github}" class="btn btn-primary">githubprofile</a>
  </div>
</div>`
    })
}