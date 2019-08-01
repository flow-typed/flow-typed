const pify = require("pify");

const cpsFunction: Function = (foo, callback) => {
  setTimeout(() => {
    callback(foo);
  }, 1000);
};

const cpsObject = {
  foo: cpsFunction,
  bar: 123
};

pify(cpsFunction, { multiArgs: true })("hi").then(x => {
  console.log(x);
});
pify(cpsObject).foo("hi").then(x => {
  console.log(x);
});

// $ExpectError
pify("asdf");

// $ExpectError
pify();

pify({});

// $ExpectError
pify({}, 1);
