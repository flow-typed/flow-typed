// @flow
import React from "react";

// Direct module import.
import AppBar from "@material-ui/core/AppBar";

// Import via index.js
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

// $ExpectError invalid color value.
let appBar = <AppBar color="black" />;

let button1 = <Button>Click me!</Button>;

// $ExpectError invalid property value.
let button2 = <Button disableRipple={3} />;

// $ExpectError invalid variant
let typography1 = <Typography variant="wrong" />
let typography2 = <Typography variant="headline" />

// withStyles - remove prop "classes" from Props
class TestComponent extends React.Component<{
  classes: {},
  requiredProp: string
}> {}
const CustomTestComponent = withStyles({})(TestComponent)

function renderTestComponentWithError () {
  return (
    // $ExpectError is missing required prop
    <CustomTestComponent />
  )
}

function renderTestComponent () {
  return (
    // doesn't require the prop classes
    <CustomTestComponent requiredProp='test' />
  )
}

const DoubleStyledComponent = withStyles({})(CustomTestComponent)
function renderDoubleStyledComponent () {
  return (
    // doesn't require the prop classes
    <DoubleStyledComponent requiredProp='test' />
  )
}
