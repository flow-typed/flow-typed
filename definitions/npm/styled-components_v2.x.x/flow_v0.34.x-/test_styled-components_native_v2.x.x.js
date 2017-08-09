// @flow
import nativeStyled, {
  ThemeProvider as NativeThemeProvider,
  withTheme as nativeWithTheme,
  keyframes as nativeKeyframes,
} from 'styled-components/native'
import React from 'react'
import type {
  Theme as NativeTheme,
  Interpolation as NativeInterpolation,
  StyledComponent as NativeStyledComponent,
  TaggedTemplateLiteral as NativeTaggedTemplateLiteral
} from 'styled-components/native'

type NativeFunctionalReactComponent<Props: {}> = Props => React$Element<*>
type NativeReactComponentClass<Props, DefaultProps = *> = Class<React$Component<DefaultProps, Props, *>>
type NativeReactComponentConstructor<Props> = & NativeFunctionalReactComponent<Props> & NativeReactComponentClass<Props>

const Title: NativeReactComponentConstructor<{}> = nativeStyled.Text`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

declare var needsNativeFunctionalReactComponent: NativeFunctionalReactComponent<*> => void
declare var needsNativeReactComponentClass: NativeReactComponentClass<*> => void

needsNativeFunctionalReactComponent(Title)
needsNativeReactComponentClass(Title)

const ExtendedTitle: NativeReactComponentConstructor<{}> = nativeStyled(Title)`
  font-size: 2em;
`;

const Wrapper: NativeReactComponentConstructor<{}> = nativeStyled.View`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

const Attrs1: NativeStyledComponent<NativeReactComponentConstructor<{}>> = nativeStyled.View.attrs({
  testProp: 'foo'
});

// $ExpectError
const Attrs1Error: NativeTaggedTemplateLiteral<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})``;

const Attrs2: NativeStyledComponent<NativeReactComponentConstructor<{}>> = nativeStyled.View
  .attrs({
    testProp1: 'foo'
  })
  .attrs({
    testProp2: 'bar'
  });

const Attrs3: NativeReactComponentConstructor<{}> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const nativeTheme: NativeTheme = {
  background: "papayawhip"
};

const NeedsThemeNativeComponent: NativeFunctionalReactComponent<{ theme: NativeTheme }> = () => (
  <NativeThemeProvider theme={nativeTheme}>
    <Wrapper>
      <Title>Hello World, this is my first nativeStyled component!</Title>
    </Wrapper>
  </NativeThemeProvider>
);

const NativeComponentWithTheme: NativeFunctionalReactComponent<{}> = nativeWithTheme(NeedsThemeNativeComponent);

const NativeComponent2: NativeFunctionalReactComponent<{}> = () => (
  <NativeThemeProvider theme={outerNativeTheme => outerNativeTheme}>
    <Wrapper>
      <Title>Hello World, this is my first nativeStyled component!</Title>
    </Wrapper>
  </NativeThemeProvider>
);

const NativeOpacityKeyFrame = nativeKeyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// $ExpectError
const NativeNonExistingElementWrapper = nativeStyled.Nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const num: 9 = 9

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

// ---- COMPONENT CLASS TESTS ----
class NativeNeedsThemeReactClass extends React.Component {
  props: { foo: string, theme: NativeTheme }
  render() { return <div />; }
}

class NativeReactClass extends React.Component {
  props: { foo: string }
  render() { return <div />; }
}

const NativeStyledClass: NativeReactComponentClass<{ foo: string, theme: NativeTheme }> = nativeStyled(NativeNeedsThemeReactClass)`
  color: red;
`;

const NativeNeedsFoo1Class: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NativeNeedsThemeReactClass);

// $ExpectError
const NativeNeedsFoo0ClassError: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NativeReactClass);
// $ExpectError
const NativeNeedsFoo1ClassError: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NativeNeedsFoo1Class);
// $ExpectError
const NativeNeedsFoo1ErrorClass: NativeReactComponentClass<{ foo: number }> = nativeWithTheme(NativeNeedsThemeReactClass);
// $ExpectError
const NativeNeedsFoo2ErrorClass: NativeReactComponentClass<{ foo: string }, { theme: string }> = nativeWithTheme(NativeNeedsThemeReactClass);
// $ExpectError
const NativeNeedsFoo3ErrorClass: NativeReactComponentClass<{ foo: string, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoo1Class);
// $ExpectError
const NativeNeedsFoo4ErrorClass: NativeReactComponentClass<{ foo: number }> = nativeWithTheme(NativeNeedsFoo1Class);
// $ExpectError
const NativeNeedsFoo5ErrorClass: NativeReactComponentClass<{ foo: string, theme: string }> = nativeWithTheme(NativeNeedsFoo1Class);

// ---- INTERPOLATION TESTS ----
const nativeInterpolation: Array<NativeInterpolation> = nativeStyled.css`
  background-color: red;
`;

// $ExpectError
const nativeInterpolationError: Array<NativeInterpolation | boolean> = nativeStyled.css`
  background-color: red;
`;


// ---- DEFAULT COMPONENT TESTS ----
const NativeDefaultComponent: NativeReactComponentConstructor<{}> = nativeStyled.View`
  background-color: red;
`;

// $ExpectError
const NativeDefaultComponentError: {} => string = nativeStyled.View`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS ----
declare var View: {} => React$Element<*>
const NativeFunctionalComponent: NativeFunctionalReactComponent<{ foo: string, theme: NativeTheme }> = props => <View />

const NativeNeedsFoo1: NativeFunctionalReactComponent<{ foo: string, theme: NativeTheme }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo1Error: NativeFunctionalReactComponent<{ foo: number }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;

const NativeNeedsFoo2: NativeFunctionalReactComponent<{ foo: string, theme: NativeTheme }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo2Error: NativeFunctionalReactComponent<{ foo: number }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (withTheme)----
const NativeNeedsFoo1Functional: NativeFunctionalReactComponent<{ foo: string }> = nativeWithTheme(NativeFunctionalComponent);
const NativeNeedsFoo2Functional: NativeFunctionalReactComponent<{ foo: string }> = nativeWithTheme(NativeNeedsFoo1Functional);

// $ExpectError
const NativeNeedsFoo1ErrorFunctional: NativeFunctionalReactComponent<{ foo: number }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo2ErrorFunctional: NativeFunctionalReactComponent<{ foo: string }, { theme: string }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo3ErrorFunctional: NativeFunctionalReactComponent<{ foo: number, theme: NativeTheme }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo4ErrorFunctional: NativeFunctionalReactComponent<{ foo: number }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $ExpectError
const NativeNeedsFoo5ErrorFunctional: NativeFunctionalReactComponent<{ foo: string }, { theme: string }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $ExpectError
const NativeNeedsFoo6ErrorFunctional: NativeFunctionalReactComponent<{ foo: number }, { theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoo1Functional);
