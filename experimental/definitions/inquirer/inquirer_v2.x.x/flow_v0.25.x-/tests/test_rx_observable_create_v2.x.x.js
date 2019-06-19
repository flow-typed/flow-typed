// @flow

// $ExpectError: No negative tests here
const skipNegativeTest: string = true;

var inquirer = require('inquirer');

// $ExpectError
var Rx: any = require('rxjs');

var observe = Rx.Observable.create(function (obs) {
  obs.onNext({
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  });

  obs.onNext({
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  });

  obs.onNext({
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
  });
  obs.onCompleted();
});

inquirer.prompt(observe).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
