// @flow
import {renderToString} from 'react-dom/server'
import styled, {
  css,
  ThemeProvider,
  withTheme,
  keyframes,
  ServerStyleSheet,
  StyleSheetManager
} from 'styled-components'
import React from 'react'
import type {
  Theme,
  Interpolation,
  ReactComponentFunctional,
  ReactComponentFunctionalUndefinedDefaultProps,
  ReactComponentClass,
  ReactComponentStyled,
  ReactComponentStyledTaggedTemplateLiteral,
  ReactComponentUnion,
  ReactComponentIntersection,
} from 'styled-components'
import { createReadStream } from 'fs'

const TitleTaggedTemplateLiteral: ReactComponentStyledTaggedTemplateLiteral<{}> = styled.h1;

const TitleStyled: ReactComponentStyled<*> = styled.h1`
  font-size: 1.5em;
`;

const TitleGeneric: ReactComponentIntersection<*> = styled.h1`
  font-size: 1.5em;
`;
``
const TitleFunctional: ReactComponentFunctional<*> = styled.h1`
  font-size: 1.5em;
`;

const TitleClass: ReactComponentClass<*> = styled.h1`
  font-size: 1.5em;
`;

declare var needsReactComponentFunctional: ReactComponentFunctional<*> => void
declare var needsReactComponentClass: ReactComponentClass<*> => void

needsReactComponentFunctional(TitleStyled)
needsReactComponentClass(TitleStyled)

const ExtendedTitle: ReactComponentIntersection<*> = styled(TitleStyled)`
  font-size: 2em;
`;

const Wrapper: ReactComponentIntersection<*> = styled.section`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

// ---- EXTEND ----
const Attrs0ReactComponent: ReactComponentStyled<*> = styled.div.extend``;
const Attrs0ExtendReactComponent: ReactComponentIntersection<*> = Attrs0ReactComponent.extend``;

const Attrs0SyledComponent: ReactComponentStyledTaggedTemplateLiteral<*> = styled.div;
const Attrs0ExtendStyledComponent: ReactComponentIntersection<*> = Attrs0SyledComponent.extend``;

// ---- ATTRIBUTES ----
const Attrs1: ReactComponentStyledTaggedTemplateLiteral<*> = styled.section.attrs({
  testProp: 'foo'
});

// $ExpectError
const Attrs1Error: ReactComponentStyledTaggedTemplateLiteral<*> = styled.section.attrs({
  testProp: 'foo'
})``;

declare var needsString: string => void

needsReactComponentFunctional(styled.section.attrs({})``)
needsReactComponentClass(styled.section.attrs({})``)

// $ExpectError
needsString(styled.section.attrs({})``)

const Attrs2: ReactComponentStyledTaggedTemplateLiteral<*> = styled.section
  .attrs({
    testProp1: 'foo'
  })
  .attrs({
    testProp2: 'bar'
  });

const Attrs3Styled: ReactComponentStyled<*> = styled.section.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const Attrs3Generic: ReactComponentIntersection<*> = styled.section.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const Attrs3Functional: ReactComponentFunctional<*> = styled.section.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const Attrs3Class: ReactComponentClass<*> = styled.section.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const theme: Theme = {
  background: "papayawhip"
};

// ---- WithComponent ----
const withComponent1: ReactComponentStyled<*> = styled.div.withComponent('a');
const withComponent2: ReactComponentStyled<*> = styled.div.withComponent(withComponent1);
const withComponent3: ReactComponentStyled<*> = styled.div.withComponent(Attrs3Class);
const withComponent4: ReactComponentStyled<*> = styled('div').withComponent('a');
const withComponent5: ReactComponentStyled<*> = styled('div').withComponent(withComponent1);
const withComponent6: ReactComponentStyled<*> = styled('div').withComponent(Attrs3Class);
// $ExpectError
const withComponentError1: ReactComponentStyled<*> = styled.div.withComponent(0);
// $ExpectError
const withComponentError2: ReactComponentStyled<*> = styled.div.withComponent('NotHere');

class CustomComponentError3 extends React.Component<{ foo: string }> {
  render() { return <div />; }
}

// $ExpectError
const withComponentError3 = styled(CustomComponentError3).withComponent('a');
// $ExpectError
const withComponentError4 = styled(CustomComponentError3).withComponent(withComponent1);
// $ExpectError
const withComponentError5 = styled(CustomComponentError3).withComponent(Attrs3Class);
// $ExpectError
const withComponentError6 = styled(CustomComponentError3).withComponent(0);
// $ExpectError
const withComponentError7 = styled(CustomComponentError3).withComponent('NotHere');

// ---- WithTheme ----
const Component: ReactComponentFunctionalUndefinedDefaultProps<{ theme: Theme }> = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <TitleStyled>Hello World, this is my first styled component!</TitleStyled>
    </Wrapper>
  </ThemeProvider>
);

const ComponentWithTheme: ReactComponentFunctionalUndefinedDefaultProps<{}> = withTheme(Component);

const Component2: ReactComponentFunctionalUndefinedDefaultProps<{}> = () => (
  <ThemeProvider theme={outerTheme => outerTheme}>
    <Wrapper>
      <TitleStyled>Hello World, this is my first styled component!</TitleStyled>
    </Wrapper>
  </ThemeProvider>
);

const OpacityKeyFrame: string = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// $ExpectError
const NoExistingElementWrapper = styled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const num: 9 = 9

// $ExpectError
const NoExistingComponentWrapper = styled()`
  padding: 4em;
  background: papayawhip;
`;

// $ExpectError
const NumberWrapper = styled(num)`
  padding: 4em;
  background: papayawhip;
`;

const sheet = new ServerStyleSheet()
const html = renderToString(sheet.collectStyles(<ComponentWithTheme />))
const css1 = sheet.getStyleTags()

const sheet2 = new ServerStyleSheet()
const html2 = renderToString(
  <StyleSheetManager sheet={sheet}>
    <ComponentWithTheme />
  </StyleSheetManager>
)

const css2 = sheet.getStyleTags()
const css3 = sheet.getStyleElement()

const stream = createReadStream('file.txt')

// $ExpectError (Must pass in a readable stream)
sheet.interleaveWithNodeStream('file.txt')
sheet.interleaveWithNodeStream(stream)

// ---- COMPONENT CLASS TESTS ----
class NeedsThemeReactClass extends React.Component<{ foo: string, theme: Theme }> {
  render() { return <div />; }
}

class ReactClass extends React.Component<{ foo: string }> {
  render() { return <div />; }
}

const StyledClass: ReactComponentClass<{ foo: string, theme: Theme }> = styled(NeedsThemeReactClass)`
  color: red;
`;

// ---- INTERPOLATION TESTS ----
const interpolation: Array<Interpolation> = styled.css`
  background-color: red;
`;

const interpolation2: Array<Interpolation> = css`
  background-color: red;
`;

// $ExpectError
const interpolationError: Array<Interpolation | boolean> = styled.css`
  background-color: red;
`;

// $ExpectError
const interpolationError2: Array<Interpolation | boolean> = css`
  background-color: red;
`;

// ---- DEFAULT COMPONENT TESTS ----
const defaultComponent: ReactComponentIntersection<{}> = styled.div`
  background-color: red;
`;

// $ExpectError
const defaultComponentError: {} => string = styled.div`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS ----
const FunctionalComponent: ReactComponentFunctionalUndefinedDefaultProps<{ foo: string, theme: Theme }> = props => <div />;

const NeedsFoo1: ReactComponentFunctionalUndefinedDefaultProps<{ foo: string, theme: Theme }> = styled(FunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo1Error: ReactComponentFunctionalUndefinedDefaultProps<{ foo: number }> = styled(FunctionalComponent)`
  background-color: red;
`;

const NeedsFoo2: ReactComponentFunctionalUndefinedDefaultProps<{ foo: string, theme: Theme }> = styled(NeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo2Error: ReactComponentFunctionalUndefinedDefaultProps<{ foo: number }> = styled(NeedsFoo1)`
  background-color: red;
`;

const NeedsNothingInferred = styled(() => <div />);
