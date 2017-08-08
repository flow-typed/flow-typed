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

type NativeFunctionalReactComponent<P: {}> = P => React$Element<*>
type NativeReactComponentClass<P> = Class<React$Component<*, P, *>>
type NativeReactComponentConstructor<P> = & NativeFunctionalReactComponent<P> & NativeReactComponentClass<P>

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

const NativeComponent: NativeFunctionalReactComponent<{}> = () => (
  <NativeThemeProvider theme={nativeTheme}>
    <Wrapper>
      <Title>Hello World, this is my first nativeStyled component!</Title>
    </Wrapper>
  </NativeThemeProvider>
);

const NativeComponentWithTheme: NativeFunctionalReactComponent<{ theme: NativeTheme }> = nativeWithTheme(NativeComponent);

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
class NativeNeedsFooReactClass extends React.Component {
  props: { foo: string }
  render() { return <div />; }
}

const NativeNeedsFooStyledClass: NativeReactComponentClass<{ foo: string }> = nativeStyled(NativeNeedsFooReactClass)`
  color: red;
`;

const NativeNeedsFoonativeWithTheme1Class: NativeReactComponentClass<{ foo: string, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFooReactClass);
const NativeNeedsFoonativeWithTheme2Class: NativeReactComponentClass<{ foo: string, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Class);

// $ExpectError
const NativeNeedsFoonativeWithTheme1ErrorClass: NativeReactComponentClass<{ foo: number }> = nativeWithTheme(NativeNeedsFooReactClass);
// $ExpectError
const NativeNeedsFoonativeWithTheme2ErrorClass: NativeReactComponentClass<{ foo: string, theme: string }> = nativeWithTheme(NativeNeedsFooReactClass);
// $ExpectError
const NativeNeedsFoonativeWithTheme3ErrorClass: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NativeNeedsFooReactClass);
// $ExpectError
const NativeNeedsFoonativeWithTheme4ErrorClass: NativeReactComponentClass<{ foo: number, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Class);
// $ExpectError
const NativeNeedsFoonativeWithTheme5ErrorClass: NativeReactComponentClass<{ foo: number }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Class);
// $ExpectError
const NativeNeedsFoonativeWithTheme6ErrorClass: NativeReactComponentClass<{ foo: string, theme: string }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Class);

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
const NativeFunctionalComponent: ({ foo: string } => React$Element<*>) = props => <View />

const NativeNeedsFoo1: NativeFunctionalReactComponent<{ foo: string }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo1Error: NativeFunctionalReactComponent<{ foo: number }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;

const NativeNeedsFoo2: NativeFunctionalReactComponent<{ foo: string }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo2Error: NativeFunctionalReactComponent<{ foo: number }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (nativeWithTheme)----
const NativeNeedsFoonativeWithTheme1Functional: NativeFunctionalReactComponent<{ foo: string, theme: NativeTheme }> = nativeWithTheme(NativeFunctionalComponent);
const NativeNeedsFoonativeWithTheme2Functional: NativeFunctionalReactComponent<{ foo: string, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Functional);

// $ExpectError
const NativeNeedsFoonativeWithTheme1ErrorFunctional: NativeFunctionalReactComponent<{ foo: number }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoonativeWithTheme2ErrorFunctional: NativeFunctionalReactComponent<{ foo: string, theme: string }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoonativeWithTheme3ErrorFunctional: NativeFunctionalReactComponent<{ foo: string }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoonativeWithTheme4ErrorFunctional: NativeFunctionalReactComponent<{ foo: number, theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Functional);
// $ExpectError
const NativeNeedsFoonativeWithTheme5ErrorFunctional: NativeFunctionalReactComponent<{ foo: number }> = nativeWithTheme(NativeNeedsFoonativeWithTheme1Functional);
// $ExpectError
const NativeNeedsFoonativeWithTheme6ErrorFunctional: NativeFunctionalReactComponent<{ foo: string, theme: string }> = nativeWithTheme(NativeNeedsFooWithTheme1Functional);
