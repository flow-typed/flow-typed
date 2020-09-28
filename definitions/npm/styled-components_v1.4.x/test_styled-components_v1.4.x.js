import styled, {ThemeProvider, withTheme, keyframes} from 'styled-components'
import type {Theme} from 'styled-components'
import nativeStyled, {
  ThemeProvider as NativeThemeProvider,
  withTheme as nativeWithTheme,
  keyframes as nativeKeyframes
} from 'styled-components/native'
import type {Theme as NativeTheme} from 'styled-components/native'

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

// $FlowExpectedError
const NoExistingElementWrapper = styled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const num = 9

// $FlowExpectedError
const NoExistingComponentWrapper = styled()`
  padding: 4em;
  background: papayawhip;
`;

// $FlowExpectedError
const NumberWrapper = styled(num)`
  padding: 4em;
  background: papayawhip;
`;

// native

const NativeTitle = nativeStyled.Text`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ExtendedNativeTitle = nativeStyled(NativeTitle)`
  font-size: 2em;
`

const NativeWrapper = nativeStyled.View`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

const nativeTheme: NativeTheme = {
  background: "papayawhip"
}

const NativeComponent = () => (
  <NativeThemeProvider theme={nativeTheme}>
    <NativeWrapper>
      <NativeTitle>
        Hello World, this is my first native styled component!
      </NativeTitle>
    </NativeWrapper>
  </NativeThemeProvider>
)

const NativeComponentWithTheme = nativeWithTheme(NativeComponent)

const NativeOpacityKeyFrame = nativeKeyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// $FlowExpectedError
const NativeNoExistingElementWrapper = nativeStyled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const nativeNum = 9

// $FlowExpectedError
const NativeNoExistingComponentWrapper = nativeStyled()`
  padding: 4em;
  background: papayawhip;
`;

// $FlowExpectedError
const NativeNumberWrapper = nativeStyled(num)`
  padding: 4em;
  background: papayawhip;
`;
