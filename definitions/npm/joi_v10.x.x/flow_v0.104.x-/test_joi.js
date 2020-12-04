// @flow

import Joi from "joi";

const validStrings = Joi.string().valid(["a", "b", "c"]);

// String overrides `valid` definition and should only accept strings
// $FlowExpectedError
const validStringsError = Joi.string().valid(["a", "b", 1]);

const number1 = Joi.number().min(0).required();
const number2 = Joi.number().min(-1).max(1);

// $FlowExpectedError
const invalidNumber = Joi.number().maximum(1);

const object = Joi.object({ number1 }).unknown();

const extendedObject = object.keys({ number2 });

// $FlowExpectedError
const notAThing = Joi.objectDoesNotExist();

const date = Joi.date().min(new Date());
const timestamp = date.timestamp();

// $FlowExpectedError
const invalidTimestamp = date.timestamp("invalid");

const arity1Fn = Joi.func().arity(1);

// $FlowExpectedError
const invalidArityFn = Joi.funct().arity("1");

const arrayOfDates = Joi.array().items(date);
const arrayOfNumbers = Joi.array().items(Joi.number());
