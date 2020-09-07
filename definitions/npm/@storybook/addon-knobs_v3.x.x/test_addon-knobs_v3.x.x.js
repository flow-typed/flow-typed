/* @flow */
import {
  array,
  boolean,
  button,
  color,
  date,
  number,
  object,
  select,
  selectV2,
  text
} from "@storybook/addon-knobs/react";

// array
let arrayVal: Array<string>;
arrayVal = array("Array", ["one", "two"]);
arrayVal = array("Array with separator", ["one", "two"], ",");
arrayVal = array("Array with object default", { one: "one", two: "two" });
let numArrayVal: Array<number> = array("Array assigned to non-string array variable", [1, 2]);
// $FlowExpectedError
arrayVal = array("Array with object default", { one: 1, two: 2 });
// $FlowExpectedError
arrayVal = array("Array with non-string array default", [1, 2]);
// $FlowExpectedError
arrayVal = array("Array with non-array and non-object default", "one");
// $FlowExpectedError
arrayVal = array("Array with non-string separator", ["one", "two"], 0);

// boolean
let boolVal: boolean;
boolVal = boolean("Boolean", false);
// $FlowExpectedError
boolVal = boolean("Boolean with non-boolean default", "false");
// $FlowExpectedError
let badBoolVal: string = boolean("Boolean assigned to non-boolean variable", false);

// button
button("Button", () => console.info("Button pressed"));

// color
let colorVal: string;
colorVal = color("Color", "#ffffff");
// $FlowExpectedError
colorVal = color("Color with non-string default", 0);
// $FlowExpectedError
let badColorVal: number = color("Color", "#ffffff");

// date
let dateVal: number;
dateVal = date("Date", new Date());
// $FlowExpectedError
dateVal = date("Date with non-date default", "2018-01-01");
// $FlowExpectedError
let badDateVal: string = date("Date assigned to non-number variable", new Date());

// number
let numberVal: number;
numberVal = number("Number", 1);
numberVal = number("Number with empty options", 1, {});
numberVal = number("Number with range set to true", 1, { range: true, min: 0, max: 5, step: 0.1 });
numberVal = number("Number with range set to false", 1, { range: false, min: 0, max: 5, step: 0.1 });
numberVal = number("Number with options not including range", 1, { min: 0, max: 5 });
// $FlowExpectedError
numberVal = number("Number with non-numeric default", "one");
// $FlowExpectedError
numberVal = number("Number with non-numeric min", 1, { min: "0" });
// $FlowExpectedError
numberVal = number("Number with non-numeric max", 1, { max: "5" });
// $FlowExpectedError
let badNumberVal: string = number("Number assigned to non-numeric variable", 1);

// object
let objectVal: { [key: string]: number, ... };
objectVal = object("Object", { value: 1 });

// select
let selectVal: string;
selectVal = select("Select with array options", ["1", "2", "3"], "2");
selectVal = select("Select with object options", { "1": "One", "2": "Two", "3": "Three" }, "2");
// $FlowExpectedError
selectVal = select("Select with no default", [1, 2, 3]);
// $FlowExpectedError
selectVal = select("Select with array options of different type to default", [1, 2, 3], "2");
// $FlowExpectedError
selectVal = select("Select with object options of different type to default", { "1": 1, "2": 2, "3": 3 }, "2");
// $FlowExpectedError
let badSelectVal: number = select("Select assigned to variable of different type to default", ["1", "2", "3"], "2");

// selectV2
let selectV2Val: string;
selectV2Val = selectV2("SelectV2 with array options", ["1", "2", "3"], "2");
selectV2Val = selectV2("SelectV2 with object options", { One: "1", Two: "2", Three: "3" }, "2");
let maybeSelect2Val: ?string = selectV2(
  "SelectV2 with maybe options",
  { One: "1", Two: "2", Three: "3", None: null },
  "2"
);
// $FlowExpectedError
selectV2Val = selectV2("SelectV2 with no default", ["1", "2", "3"]);
// $FlowExpectedError
selectV2Val = selectV2("SelectV2 with array options of different type to default", [1, 2, 3], "2");
// $FlowExpectedError
selectV2Val = selectV2("SelectV2 with object options of different type to default", { One: 1, Two: 2, Three: 3 }, "2");
// $FlowExpectedError
let badSelectV2Val: number = select("SelectV2 assigned to variable of different type to default", ["1", "2", "3"], "2");

// text
let textVal: string;
textVal = text("Text", "default");
// $FlowExpectedError
textVal = text("Text with non-string default", 1);
// $FlowExpectedError
let badTextVal: number = text("Text assigned to non-string variable", "default");
