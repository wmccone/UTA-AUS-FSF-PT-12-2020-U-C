const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'stack',
      
    },
    {
      type: 'input',
      message: 'what is your preferred method of communication',
      name: 'contact',
    },
  ])
  .then( data =>{
    
   fs.writeFile('log.txt',JSON.stringify(data), (err) =>
   err? console.log(err) : console.log("success")
   );
});