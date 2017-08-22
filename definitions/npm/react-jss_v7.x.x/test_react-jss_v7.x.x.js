// @flow
import React from 'react';
import injectSheet, { JssProvider, ThemeProvider, withTheme, createTheming } from 'react-jss';
import type { Classes, Sheet } from 'react-jss';


const styles = {
  root: {
    backgroundColor: 'red',
  },
  [`@media (min-width: ${10}px)`]: {
    root: {
      width: 200
    }
  }
};

const stylesCreator = () => styles;

type Styles = typeof styles;

type Props = {
  classes: Classes<Styles>,
  sheet: Sheet<Styles>,
  content: string,
}

const FunctionComponent = (props: Props) => {
  if (!props.sheet.attached) {
    return null;
  }

  return <div className={props.classes.root}>{props.content}</div>;
};

const FunctionComponentUsesWrongClassname = (props: Props) => {
  // $ExpectError - property `nonExistentClassName` is not found in "styles"
  return <div className={props.classes.nonExistentClassName}>{props.content}</div>;
};

class ClassComponent extends React.Component {
  props: Props;

  render() {
    const { classes, sheet, content } = this.props;

    if (!sheet.attached) {
      return null;
    }

    return <div className={classes.root}>{content}</div>
  }
}

// ===================================
// "injectSheet" signature
// ===================================

// $ExpectError - missing "styles" argument
injectSheet()(FunctionComponent);

// $ExpectError - wrong type of "styles" argument
injectSheet(123)(FunctionComponent);

// no errors
injectSheet(styles)(FunctionComponent);


// ===================================
// Wrapping function components
// ===================================

const WrappedFunctionComponent = injectSheet(styles)(FunctionComponent);

// $ExpectError - missing prop "content"
<WrappedFunctionComponent />;

// $ExpectError - wrong type of prop "content"
<WrappedFunctionComponent content={1} />;

// No errors
<WrappedFunctionComponent content="Hi there!" />;

// =================================================
// Wrapping function components with styles creator
// =================================================

const WrappedFunctionComponentWithStylesCreator = injectSheet(stylesCreator)(FunctionComponent);

// $ExpectError - missing prop "content"
<WrappedFunctionComponentWithStylesCreator />;

// $ExpectError - wrong type of prop "content"
<WrappedFunctionComponentWithStylesCreator content={1} />;

// No errors
<WrappedFunctionComponentWithStylesCreator content="Hi there" />;

// =================================================
// Wrapping class components with styles creator
// =================================================

const WrappedClassComponentWithStylesCreator = injectSheet(stylesCreator)(ClassComponent);

// $ExpectError - missing prop "content"
<WrappedClassComponentWithStylesCreator />;

// $ExpectError - wrong type of prop "content"
<WrappedClassComponentWithStylesCreator content={true} />;

// No errors
<WrappedClassComponentWithStylesCreator content="Hi there" />;

// ===================================
// Wrapping class components
// ===================================

const WrappedClassComponent = injectSheet({ root: { backgroundColor: 'red' } })(ClassComponent);

// $ExpectError - missing prop "content"
<WrappedClassComponent />;

// $ExpectError - wrong type of prop "content"
<WrappedClassComponent content={true} />;

// No errors
<WrappedClassComponent content="Lorem ipsum!" />;


// ===================================
// Wrapping Null components
// ===================================

const GlobalStylesComponent = injectSheet(styles)();

<GlobalStylesComponent />;


// ===================================
// JssProvider
// ===================================

<JssProvider />;


// ===================================
// ThemeProvider
// ===================================

<ThemeProvider />;


// ===================================
// withTheme
// ===================================

type ButtonProps = {
  theme: {
    primaryColor: string
  },
  onClick: Function,
};

const ButtonFunctionalComponent = ({ theme }: ButtonProps) => (
  <button>{theme.primaryColor}</button>
);

class ButtonClassComponent extends React.Component {
  props: ButtonProps;

  render() {
    const { theme } = this.props;

    return (
      <button>{theme.primaryColor}</button>
    );
  }
};

const ThemedButtonFunctionalComponent = withTheme(ButtonFunctionalComponent);

// $ExpectError - missing prop "onClick"
<ThemedButtonFunctionalComponent />;

// No error
<ThemedButtonFunctionalComponent onClick={() => {}} />;

const ThemedButtonClassComponent = withTheme(ButtonClassComponent);

// $ExpectError - missing prop "onClick"
<ThemedButtonClassComponent />;

// No errors
<ThemedButtonClassComponent onClick={() => {}} />;

// ===================================
// createTheming
// ===================================

createTheming('__MY_THEME__');
