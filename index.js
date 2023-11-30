// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const path= require("path")
const fs= require("fs")
const generateMarkdown= require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title", 
        message:"Enter the Title of your Project:"
    },
    {
        type:"input",
        name:"description", 
        message:"Enter the description of your Project:"
    },
    {
        type:"input",
        name:"installation", 
        message:"What packages did you use?"
    },
    {
        type:"input",
        name:"usage", 
        message:"How is your application used?"
    },
    {
        type:"list",
        name:"license", 
        message:"What License is your project licensed under?",
        choices:["GNU", "ISC", "APACHE2.0", "MIT", "GPLV3", "None"]
    },
    {
        type:"input",
        name:"test", 
        message:"What type of tests did you run on your app?"
    },
    {
        type:"input",
        name:"contribuition", 
        message:"What are the contribution guidelines for your app?"
    },
    {
        type:"input",
        name:"github", 
        message:"Enter your github username:"
    },
    {
        type:"input",
        name:"email", 
        message:"Enter your email :"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("./output/README.md", generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
