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
  TaggedTemplateLiteral,
  StyledComponent,
} from 'styled-components'

type FunctionalReactComponent<Props: {}> = Props => React$Element<*>
type ReactComponentClass<Props, DefaultProps = *> = Class<React$Component<DefaultProps, Props, *>>
type ReactComponentConstructor<Props> = & FunctionalReactComponent<Props> & ReactComponentClass<Props>

const Title: ReactComponentConstructor<{}> = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

declare var needsFunctionalReactComponent: FunctionalReactComponent<*> => void
declare var needsReactComponentClass: ReactComponentClass<*> => void

needsFunctionalReactComponent(Title)
needsReactComponentClass(Title)

const ExtendedTitle: ReactComponentConstructor<{}> = styled(Title)`
  font-size: 2em;
`;

const Wrapper: ReactComponentConstructor<{}> = styled.section`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

const Attrs1: StyledComponent<ReactComponentConstructor<{}>> = styled.section.attrs({
  testProp: 'foo'
});

// $ExpectError
const Attrs1Error: TaggedTemplateLiteral<*> = nativeStyled.section.attrs({
  testProp: 'foo'
})``;

const Attrs2: StyledComponent<ReactComponentConstructor<{}>> = styled.section
  .attrs({
    testProp1: 'foo'
  })
  .attrs({
    testProp2: 'bar'
  });

const Attrs3: ReactComponentConstructor<{}> = styled.section.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const theme: Theme = {
  background: "papayawhip"
};

const Component: FunctionalReactComponent<{}> = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  </ThemeProvider>
);

const ComponentWithTheme: FunctionalReactComponent<{ theme: Theme }> = withTheme(Component);

const Component2: FunctionalReactComponent<{}> = () => (
  <ThemeProvider theme={outerTheme => outerTheme}>
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
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
const html = renderToString(sheet.collectStyles(<Component />))
const css = sheet.getStyleTags()

const sheet2 = new ServerStyleSheet()
const html2 = renderToString(
  <StyleSheetManager sheet={sheet}>
    <Component />
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

const NeedsFoo1Class: ReactComponentClass<{ foo: string }> = withTheme(NeedsThemeReactClass);

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
const defaultComponent: ReactComponentConstructor<{}> = styled.div`
  background-color: red;
`;

// $ExpectError
const defaultComponentError: {} => string = styled.div`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS ----
const FunctionalComponent: FunctionalReactComponent<{ foo: string, theme: Theme }> = props => <div />

const NeedsFoo1: FunctionalReactComponent<{ foo: string, theme: Theme }> = styled(FunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo1Error: FunctionalReactComponent<{ foo: number }> = styled(FunctionalComponent)`
  background-color: red;
`;

const NeedsFoo2: FunctionalReactComponent<{ foo: string, theme: Theme }> = styled(NeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo2Error: FunctionalReactComponent<{ foo: number }> = styled(NeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (withTheme)----
const NeedsFoo1Functional: FunctionalReactComponent<{ foo: string }> = withTheme(FunctionalComponent);
const NeedsFoo2Functional: FunctionalReactComponent<{ foo: string }> = withTheme(NeedsFoo1Functional);

// $ExpectError
const NeedsFoo1ErrorFunctional: FunctionalReactComponent<{ foo: number }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo2ErrorFunctional: FunctionalReactComponent<{ foo: string }, { theme: string }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo3ErrorFunctional: FunctionalReactComponent<{ foo: number, theme: Theme }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFoo4ErrorFunctional: FunctionalReactComponent<{ foo: number }> = withTheme(NeedsFoo1Functional);
// $ExpectError
const NeedsFoo5ErrorFunctional: FunctionalReactComponent<{ foo: string }, { theme: string }> = withTheme(NeedsFoo1Functional);
// $ExpectError
const NeedsFoo6ErrorFunctional: FunctionalReactComponent<{ foo: number }, { theme: Theme }> = withTheme(NeedsFoo1Functional);
