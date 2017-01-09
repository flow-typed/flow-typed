// @flow

// $ExpectError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');

inquirer.prompt({
  type: 'list',
  name: 'chocolate',
  message: 'What\'s your favorite chocolate?',
  choices: ['Mars', 'Oh Henry', 'Hershey']
}).then(function () {
  inquirer.prompt({
    type: 'list',
    name: 'beverage',
    message: 'And your favorite beverage?',
    choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull']
  });
});
