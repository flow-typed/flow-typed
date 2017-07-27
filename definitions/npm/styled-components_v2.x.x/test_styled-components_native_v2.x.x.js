// @flow
import nativeStyled, {
  ThemeProvider as NativeThemeProvider,
  withTheme as nativeWithTheme,
  keyframes as nativeKeyframes
} from 'styled-components/native'
import type {Theme as NativeTheme} from 'styled-components/native'

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

// $ExpectError
const NativeNoExistingElementWrapper = nativeStyled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const nativeNum = 9

// $ExpectError
const NativeNoExistingComponentWrapper = nativeStyled()`
  padding: 4em;
  background: papayawhip;
`;

// $ExpectError
const NativeNumberWrapper = nativeStyled(num)`
  padding: 4em;
  background: papayawhip;
`;

type ReactFunctionalComponent<Props: {}> = Props => React$Element<*>

const TestFunctionalComponent = (props: { foo: string }) => <div />

const NeedsFoo1: ReactFunctionalComponent<{ foo: string }> = styled(TestFunctionalComponent)`
  background-color: red;
`;

// $ExpectError
const NeedsFoo1Error: ReactFunctionalComponent<{ foo: number }> = styled(TestFunctionalComponent)`
  background-color: red;
`;

const NeedsFoo2: ReactFunctionalComponent<{ foo: string }> = styled(NeedsFoo1)`
  background-color: red;
`;

// $ExpectError
const NeedsFoo2Error: ReactFunctionalComponent<{ foo: number }> = styled(NeedsFoo1)`
  background-color: red;
`;

const NeedsFooWithTheme1:
  ReactFunctionalComponent<{ foo: string }>
  = withTheme(TestFunctionalComponent);

// $ExpectError
const NeedsFooWithTheme1Error:
  ReactFunctionalComponent<{ foo: number }>
  = withTheme(TestFunctionalComponent);

const NeedsFooWithTheme2:
  & ReactFunctionalComponent<{ foo: string }>
  & ReactFunctionalComponent<{ theme: {} }>
  = withTheme(TestFunctionalComponent);

// $ExpectError
const NeedsFooWithTheme2Error:
  & ReactFunctionalComponent<{ foo: string }>
  & ReactFunctionalComponent<{ theme: string }>
  = withTheme(TestFunctionalComponent);

const NeedsFooWithTheme3:
  ReactFunctionalComponent<{ foo: string }>
  = withTheme(NeedsFooWithTheme1);

// $ExpectError
const NeedsFooWithTheme3Error:
  ReactFunctionalComponent<{ foo: number }>
  = withTheme(NeedsFooWithTheme1);

const NeedsFooWithTheme4:
  & ReactFunctionalComponent<{ foo: string }>
  & ReactFunctionalComponent<{ theme: {} }>
  = withTheme(NeedsFooWithTheme2);

// $ExpectError
const NeedsFooWithTheme4Error:
  & ReactFunctionalComponent<{ foo: string }>
  & ReactFunctionalComponent<{ theme: string }>
  = withTheme(NeedsFooWithTheme2);
