// @flow

// $FlowExpectedError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask opening hours',
      'Talk to the receptionist'
    ]
  },
  {
    type: 'rawlist',
    name: 'size',
    message: 'What size do you need',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    filter: function (val) {
      return val.toLowerCase();
    }
  }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
