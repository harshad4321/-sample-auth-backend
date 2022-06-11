#!/usr/bin/env node

const program = require("commander");
const {prompt}=require('inquirer');
const {
    addCustomer,
    findCutomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require('./index');

//Customer Questions
const questions = [
    
 {   type:'input', 
    name:'firstname',
    message:'Customer First Name'},

{
    type:'input', 
    name:'Lastname',
    message:'Customer Last Name'},
{
    type:'input', 
    name:'phone',
    message:'Customer phone number'},
{
    type:'input', 
    name:'email',
    message:'Customer email Address'}
]

program
  .description('client Management System ')
  .version('9.3.0');

//   program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer ')
//   .action((firstname ,lastname,phone,email)=>{
//     addCustomer({firstname,lastname,phone,email});
//   });


// ADD commants
program 
.command('add')
.alias('a')
.description('add a customer')
.action(()=>{
  prompt(questions).then(answers=> addCustomer(answers));
})

//Find command
  program
  .command('find <name>')
  .alias('f')
  .description('find a cutomer ')
  .action(name =>findCutomer(name));

//update command
program 
.command('update <_id>')
.alias('u')
.description('update a customer')
.action(_id =>{
  prompt(questions).then(answers=> updateCustomer(_id,answers));
})

//Remove  command
program 
.command('remove <name>')
.alias('r')
.description('remove a customer')
.action(_id => removeCustomer(_id));

//list  command
program 
.command('list ')
.alias('l')
.description('List all customers')
.action(() =>  listCustomers());





  program.parse(process.argv);