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

type FunctionalReactComponent<P: {}> = P => React$Element<*>
type ReactComponentClass<P> = Class<React$Component<*, P, *>>
type ReactComponentConstructor<P> = & FunctionalReactComponent<P> & ReactComponentClass<P>

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
class NeedsFooReactClass extends React.Component {
  props: { foo: string }
  render() { return <div />; }
}

const NeedsFooStyledClass: ReactComponentClass<{ foo: string }> = styled(NeedsFooReactClass)`
  color: red;
`;

const NeedsFooWithTheme1Class: ReactComponentClass<{ foo: string, theme: Theme }> = withTheme(NeedsFooReactClass);
const NeedsFooWithTheme2Class: ReactComponentClass<{ foo: string, theme: Theme }> = withTheme(NeedsFooWithTheme1Class);

// $ExpectError
const NeedsFooWithTheme1ErrorClass: ReactComponentClass<{ foo: number }> = withTheme(NeedsFooReactClass);
// $ExpectError
const NeedsFooWithTheme2ErrorClass: ReactComponentClass<{ foo: string, theme: string }> = withTheme(NeedsFooReactClass);
// $ExpectError
const NeedsFooWithTheme3ErrorClass: ReactComponentClass<{ foo: string }> = withTheme(NeedsFooReactClass);
// $ExpectError
const NeedsFooWithTheme4ErrorClass: ReactComponentClass<{ foo: number, theme: Theme }> = withTheme(NeedsFooWithTheme1Class);
// $ExpectError
const NeedsFooWithTheme5ErrorClass: ReactComponentClass<{ foo: number }> = withTheme(NeedsFooWithTheme1Class);
// $ExpectError
const NeedsFooWithTheme6ErrorClass: ReactComponentClass<{ foo: string, theme: string }> = withTheme(NeedsFooWithTheme1Class);

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
const FunctionalComponent: ({ foo: string } => React$Element<*>) = props => <div />

const NeedsFoo1: FunctionalReactComponent<{ foo: string }> = styled(FunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo1Error: FunctionalReactComponent<{ foo: number }> = styled(FunctionalComponent)`
  background-color: red;
`;

const NeedsFoo2: FunctionalReactComponent<{ foo: string }> = styled(NeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NeedsFoo2Error: FunctionalReactComponent<{ foo: number }> = styled(NeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (withTheme)----
const NeedsFooWithTheme1Functional: FunctionalReactComponent<{ foo: string, theme: Theme }> = withTheme(FunctionalComponent);
const NeedsFooWithTheme2Functional: FunctionalReactComponent<{ foo: string, theme: Theme }> = withTheme(NeedsFooWithTheme1Functional);

// $ExpectError
const NeedsFooWithTheme1ErrorFunctional: FunctionalReactComponent<{ foo: number }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFooWithTheme2ErrorFunctional: FunctionalReactComponent<{ foo: string, theme: string }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFooWithTheme3ErrorFunctional: FunctionalReactComponent<{ foo: string }> = withTheme(FunctionalComponent);
// $ExpectError
const NeedsFooWithTheme4ErrorFunctional: FunctionalReactComponent<{ foo: number, theme: Theme }> = withTheme(NeedsFooWithTheme1Functional);
// $ExpectError
const NeedsFooWithTheme5ErrorFunctional: FunctionalReactComponent<{ foo: number }> = withTheme(NeedsFooWithTheme1Functional);
// $ExpectError
const NeedsFooWithTheme6ErrorFunctional: FunctionalReactComponent<{ foo: string, theme: string }> = withTheme(NeedsFooWithTheme1Functional);
