const convert = require("joi-to-json-schema");

convert({});

convert({}, obj => {
  obj.foo = "bar";
  return obj;
});

// $FlowExpectedError
convert();
