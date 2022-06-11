const program = require("commander");
const {prompt}=require('inquirer')
const {
    addCustomer,
    findCutomer
} = require('./index');

program
  .description('client Management System ')
  .version('0.8.0');

  program
  .command('add <firstname> <lastname> <phone> <email>')
  .alias('a')
  .description('Add a customer ')
  .action((firstname ,lastname,phone,email)=>{
    addCustomer({firstname,lastname,phone,email});
  });
  program
  .command('find <name>')
  .alias('f')
  .description('find a cutomer ')
  .action(name =>findCutomer(name))


  program.parse(process.argv);