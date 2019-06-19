// @flow

// $ExpectError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'password',
    message: 'Enter your git password',
    name: 'password'
  }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
