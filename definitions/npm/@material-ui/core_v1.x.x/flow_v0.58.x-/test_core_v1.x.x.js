// @flow
import React from "react";

// Direct module import.
import AppBar from "@material-ui/core/AppBar";

// Import via index.js
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import withTheme from "@material-ui/core/styles/withTheme";
import CircularProgress from "@material-ui/core/CircularProgress";

import { createMuiTheme } from "@material-ui/core";

import type { Theme } from "@material-ui/core";

// $ExpectError invalid color value.
let appBar = <AppBar color="black" />;

let button1 = <Button>Click me!</Button>;

// $ExpectError invalid property value.
let button2 = <Button disableRipple={3} />;

// $ExpectError invalid variant
let typography1 = <Typography variant="wrong" />;
let typography2 = <Typography variant="headline" />;

// withStyles - required prop
class TestComponent extends React.Component<{
  classes: {},
  innerRef: string,
  requiredProp: string
}> {}
const StyledTestComponent = withStyles({})(TestComponent);

function renderStyledTestComponentWithError () {
  return (
    // $ExpectError is missing required prop
    <StyledTestComponent />
  )
}

function renderStyledTestComponent () {
  return (
    // doesn't require the props "classes" or "innerRef", but does require "requiredProp"
    <StyledTestComponent requiredProp='test' />
  )
}

// withStyles x2 HOC
const DoubleStyledComponent = withStyles({})(StyledTestComponent);
function renderDoubleStyledComponent () {
  return (
    // doesn't require the props "classes" or "innerRef", but still requires "requiredProp"
    <DoubleStyledComponent requiredProp='test' />
  )
}

// withStyles + withTheme
class TestComponentWithTheme extends React.Component<{
  classes: {},
  theme: {},
  innerRef: string,
}> {}

const StyledWithThemeTestComponent = withTheme()(withStyles({})(TestComponent));

function renderStyledWithThemeTestComponent () {
  return (
    // doesn't require "classes", "theme" or "innerRef"
    <StyledWithThemeTestComponent />
  )
}

// withStyles - default prop
class TestComponentWithDefaultProps extends React.Component<{
  classes: {},
  innerRef: string,
  value: string,
}> {
  static defaultProps = {
    value: 'value'
  }
}

const DefaultPropsStyledComponent = withStyles({})(TestComponentWithDefaultProps);

function renderTestComponentWithDefaultProps () {
  return (
    // doesn't require the prop "value"
    <DefaultPropsStyledComponent />
  )
}

function renderTestComponentWithSpecifiedDefaultProps () {
  return (
    // allows us to specify a different value for the (otherwise default) prop "value"
    <DefaultPropsStyledComponent value='anotherValue'/>
  )
}

// test CircularProgress props "color" and "variant"
let circularProgress1 = <CircularProgress color="secondary" variant="static" />;

// $ExpectError "black" is not a valid value for the prop "color"
let circularProgress2 = <CircularProgress color="black" />;

// test Theme, Breakpoints and Spacing definitions
const useExistingThemeProps = (theme: Theme) => ({
  root: {
    margin: `${theme.spacing.unit}px auto`,

    [theme.breakpoints.up('md')]: {
      margin: `${2 * theme.spacing.unit}px auto`,
    }
  }
});

// test that our Theme definition forbids access to non-existent properties
const useNonExistentThemeProps = (theme: Theme) => ({
  root: {
    // $ExpectError no property 'wigglywoo' in Theme
    margin: `${theme.wigglywoo}px auto`,
  }
});

// withStyles test valid options
const withStylesValidOptions = () => (
  withStyles({}, {
    classNamePrefix: 'somePrefix', // Option inherited from the cssinjs/jss project
    flip: true, // material-ui specific options
  })(TestComponent)
)

// withStyles test invalid options
const withStylesInvalidOptions = () => (
  // $ExpectError no property 'wigglywoo' in WithStylesOptions
  withStyles({}, {
    wigglywoo: 42,
  })(TestComponent)
)

// createMuiTheme test valid options - custom breakpoints and palette
const customTheme = () => (
  createMuiTheme({
    breakpoints: {
      keys: ['sm', 'md', 'lg'],
      values: {
        sm: 0,
        md: 800,
        lg: 1200
      }
    },
    palette: {
      type: 'dark',
      primary: {main: '#0707f8'},
      tonalOffset: 0.15,
    }
  })
)

// createMuiTheme test theme custom variables
// https://material-ui.com/customization/themes/#custom-variables
const customThemeVariables = () => (
  createMuiTheme({
    status: {
      danger: 'someValue'
    }
  })
)

// createMuiTheme test adding custom palette colors and augmenting them
const customPaletteColors = () => {
  const theme = createMuiTheme({
    palette: {
      ourCustomColor: {
        main: '#ce1100',
      }
    }
  });

  theme.palette.augmentColor(theme.palette.ourCustomColor);
}

// createMuiTheme test invalid palette color
const invalidPaletteColors = () => (
  createMuiTheme({
    palette: {
      // $ExpectError no property 'realdark' on SimplePaletteColorOptions
      primary: {
        main: '#cecece',
        realDark: '#000000',
      }
    }
  })
)

// createMuiTheme test invalid nested options
const createMuiCustomThemeInvalidNestedOptions = () => (
  createMuiTheme({
    // $ExpectError no property 'wigglywoo' in BreakpointsOptions
    breakpoints: {
      wigglywoo: 42,
    },
    // $ExpectError no property 'wigglywoo' in MixinsOptions
    mixins: {
      wigglywoo: 42,
    },
    palette: {
      // $ExpectError no property 'realdark' on SimplePaletteColorOptions
      primary: {
        main: '#cecece',
        realDark: '#000000',
      }
    },
    // $ExpectError no property 'wigglywoo' in SpacingOptions
    spacing: {
      wigglywoo: 42,
    },
  })
)
