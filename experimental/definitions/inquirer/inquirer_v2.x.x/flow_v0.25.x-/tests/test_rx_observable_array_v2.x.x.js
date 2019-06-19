// @flow

// $ExpectError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');

// $ExpectError
var Rx = require('rxjs');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }
];

// TODO: Make this type compliant somehow
var observable: any = Rx.Observable.from(questions);

inquirer.prompt(observable).ui.process.subscribe(
  function (ans) {
    console.log('Answer is: ', ans);
  },
  function (err) {
    console.log('Error: ', err);
  },
  function () {
    console.log('Completed');
  }
);
