// @flow
import {renderToString} from 'react-dom/server'
import styled, {ThemeProvider, withTheme, keyframes, ServerStyleSheet, StyleSheetManager} from 'styled-components'
import React from 'react'
import type {Theme} from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ExtendedTitle = styled(Title)`
  font-size: 2em;
`

const Wrapper = styled.section`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

const theme: Theme = {
  background: "papayawhip"
}

const Component = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  </ThemeProvider>
)

const ComponentWithTheme = withTheme(Component)

const Component2 = () => (
  <ThemeProvider theme={outerTheme => outerTheme}>
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  </ThemeProvider>
)

const OpacityKeyFrame = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// $ExpectError
const NoExistingElementWrapper = styled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const num = 9

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

class TestReactClass extends React.Component {
  render() { return <div />; }
}

const StyledClass = styled(TestReactClass)`
  color: red;
`;
