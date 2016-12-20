// @flow

// $ExpectError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');
var output = [];

var questions = [
  {
    type: 'input',
    name: 'tvShow',
    message: 'What\'s your favorite TV show?'
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true
  }
];

function ask() {
  inquirer.prompt(questions).then(function (answers) {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();
