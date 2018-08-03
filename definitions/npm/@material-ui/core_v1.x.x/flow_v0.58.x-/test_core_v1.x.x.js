// @flow
import React from "react";

// Direct module import.
import AppBar from "@material-ui/core/AppBar";

// Import via index.js
import Button from "@material-ui/core/Button";

// $ExpectError invalid color value.
let appBar = <AppBar color="black" />;

let button1 = <Button>Click me!</Button>;

// $ExpectError invalid property value.
let button2 = <Button disableRipple={3} />;

// CircularProgress
import CircularProgress from "@material-ui/core/CircularProgress";
let circularProgress1 = <CircularProgress color="secondary" variant="static" />;

// $ExpectError invalid color value.
let circularProgress2 = <CircularProgress color="black" />;
