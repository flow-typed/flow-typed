// @flow
import {renderToString} from 'react-dom/server'
import styled, {
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

  // Temporary
  ReactComponentFunctional,
  ReactComponentClass,
  ReactComponentStyled,
  ReactComponentStyledTaggedTemplateLiteral,
  ReactComponentUnion,
  ReactComponentIntersection,
} from 'styled-components'

const TitleTaggedTemplateLiteral: ReactComponentStyledTaggedTemplateLiteral<{}> = styled.h1;

const TitleStyled: ReactComponentStyled<*> = styled.h1`
  font-size: 1.5em;
`;

const TitleGeneric: ReactComponentIntersection<*> = styled.h1`
  font-size: 1.5em;
`;

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
// $ExpectError
const withComponentError1: ReactComponentStyled<*> = styled.div.withComponent(0);

// ---- WithTheme ----
const Component: ReactComponentFunctional<{ theme: Theme }> = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <TitleStyled>Hello World, this is my first styled component!</TitleStyled>
    </Wrapper>
  </ThemeProvider>
);

const ComponentWithTheme: ReactComponentFunctional<{}> = withTheme(Component);

const Component2: ReactComponentFunctional<{}> = () => (
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
const css = sheet.getStyleTags()

const sheet2 = new ServerStyleSheet()
const html2 = renderToString(
  <StyleSheetManager sheet={sheet}>
    <ComponentWithTheme />
  </StyleSheetManager>
)

const css2 = sheet.getStyleTags()
const css3 = sheet.getStyleElement()

// ---- COMPONENT CLASS TESTS ----
class NeedsThemeReactClass extends React.Component {
  props: { foo: string, theme: Theme }
  render() { return <div />; }
}

class ReactClass extends React.Component {
  props: { foo: string }
  render() { return <div />; }
}

const StyledClass: ReactComponentClass<{ foo: string, theme: Theme }> = styled(NeedsThemeReactClass)`
  color: red;
`;

const NeedsFoo1Class: ReactComponentClass<{ foo: string }, { theme: Theme }> = withTheme(NeedsThemeReactClass);

// $ExpectError
const NeedsFoo0ClassError: ReactComponentClass<{ foo: string }> = withTheme(ReactClass);
// $ExpectError
const NeedsFoo1ClassError: ReactComponentClass<{ foo: string }> = withTheme(NeedsFoo1Class);
// $ExpectError
const NeedsFoo1ErrorClass: ReactComponentClass<{ foo: number }> = withTheme(NeedsThemeReactClass);
// $ExpectError
const NeedsFoo2ErrorClass: ReactComponentClass<{ foo: string }, { theme: string }> = withTheme(NeedsThemeReactClass);
// $ExpectError
const NeedsFoo3ErrorClass: ReactComponentClass<{ foo: string, theme: Theme }> = withTheme(NeedsFoo1Class);
// $ExpectError
const NeedsFoo4ErrorClass: ReactComponentClass<{ foo: number }> = withTheme(NeedsFoo1Class);
// $ExpectError
const NeedsFoo5ErrorClass: ReactComponentClass<{ foo: string, theme: string }> = withTheme(NeedsFoo1Class);

// ---- INTERPOLATION TESTS ----
const interpolation: Array<Interpolation> = styled.css`
  background-color: red;
`;

// $ExpectError
const interpolationError: Array<Interpolation | boolean> = styled.css`
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
const FunctionalComponent: ReactComponentFunctional<{ foo: string, theme: Theme }> = props => <div />;

const NeedsFoo1: ReactComponentFunctional<{ foo: string, theme: Theme }> = styled(FunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo1Error: ReactComponentFunctional<{ foo: number }> = styled(FunctionalComponent)`
  background-color: red;
`;

const NeedsFoo2: ReactComponentFunctional<{ foo: string, theme: Theme }> = styled(NeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo2Error: ReactComponentFunctional<{ foo: number }> = styled(NeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (withTheme)----
const NeedsFoo1Functional: ReactComponentFunctional<{ foo: string }> = withTheme(FunctionalComponent);
const NeedsFoo2Functional: ReactComponentFunctional<{ foo: string }> = withTheme(NeedsFoo1Functional);

// $ExpectError
const NeedsFoo1ErrorFunctional: ReactComponentFunctional<{ foo: number }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo2ErrorFunctional: ReactComponentFunctional<{ foo: string }, { theme: string }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo3ErrorFunctional: ReactComponentFunctional<{ foo: number, theme: Theme }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo4ErrorFunctional: ReactComponentFunctional<{ foo: number }> = withTheme(NeedsFoo1Functional);
// $ExpectError
const NeedsFoo5ErrorFunctional: ReactComponentFunctional<{ foo: string }, { theme: string }> = withTheme(NeedsFoo1Functional);
// $ExpectError
const NeedsFoo6ErrorFunctional: ReactComponentFunctional<{ foo: number }, { theme: Theme }> = withTheme(NeedsFoo1Functional);
