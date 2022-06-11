const program = require("commander");
const {prompt}=require('inquirer');
const {
    addCustomer,
    findCutomer
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
  .version('0.8.0');

//   program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer ')
//   .action((firstname ,lastname,phone,email)=>{
//     addCustomer({firstname,lastname,phone,email});
//   });
program 
.command('add')
.alias('a')
.description('add a customer')
.action(()=>{
  prompt(questions).then(answers=> addCustomer(answers));
})

  program
  .command('find <name>')
  .alias('f')
  .description('find a cutomer ')
  .action(name =>findCutomer(name))


  program.parse(process.argv);