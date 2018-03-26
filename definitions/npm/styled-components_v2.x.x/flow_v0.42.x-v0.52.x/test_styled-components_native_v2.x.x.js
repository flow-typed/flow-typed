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

  // Temporary
  ReactComponentFunctional as NativeReactComponentFunctional,
  ReactComponentClass as NativeReactComponentClass,
  ReactComponentStyled as NativeReactComponentStyled,
  ReactComponentStyledTaggedTemplateLiteral as NativeReactComponentStyledTaggedTemplateLiteral,
  ReactComponentUnion as NativeReactComponentUnion,
  ReactComponentIntersection as NativeReactComponentIntersection,
} from 'styled-components'

const NativeTitleTaggedTemplateLiteral: NativeReactComponentStyledTaggedTemplateLiteral<*> = nativeStyled.Text;

const NativeTitleStyled: NativeReactComponentStyled<*> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleGeneric: NativeReactComponentIntersection<*> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleFunctional: NativeReactComponentFunctional<*> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleClass: NativeReactComponentClass<*> = nativeStyled.Text`
  font-size: 1.5em;
`;

declare var nativeNeedsReactComponentFunctional: NativeReactComponentFunctional<*> => void
declare var nativeNeedsReactComponentClass: NativeReactComponentClass<*> => void

nativeNeedsReactComponentFunctional(NativeTitleStyled)
nativeNeedsReactComponentClass(NativeTitleStyled)

const NativeExtendedTitle: NativeReactComponentIntersection<*> = nativeStyled(NativeTitleStyled)`
  font-size: 2em;
`;

const NativeWrapper: NativeReactComponentIntersection<*> = nativeStyled.View`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

// ---- EXTEND ----
const NativeAttrs0ReactComponent: NativeReactComponentStyled<*> = nativeStyled.View.extend``;
const NativeAttrs0ExtendReactComponent: NativeReactComponentIntersection<*> = NativeAttrs0ReactComponent.extend``;

const NativeAttrs0SyledComponent: NativeReactComponentStyledTaggedTemplateLiteral<*> = nativeStyled.View;
const NativeAttrs0ExtendStyledComponent: NativeReactComponentIntersection<*> = NativeAttrs0SyledComponent.extend``;

// ---- ATTRIBUTES ----
const NativeAttrs1: NativeReactComponentStyledTaggedTemplateLiteral<*> = nativeStyled.View.attrs({
  testProp: 'foo'
});

// $ExpectError
const NativeAttrs1Error: NativeReactComponentStyledTaggedTemplateLiteral<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})``;

declare var needsString: string => void

nativeNeedsReactComponentFunctional(nativeStyled.View.attrs({})``)
nativeNeedsReactComponentClass(nativeStyled.View.attrs({})``)

// $ExpectError
needsString(nativeStyled.View.attrs({})``)

const NativeAttrs2: NativeReactComponentStyledTaggedTemplateLiteral<*> = nativeStyled.View
  .attrs({
    testProp1: 'foo'
  })
  .attrs({
    testProp2: 'bar'
  });

const NativeAttrs3Styled: NativeReactComponentStyled<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Generic: NativeReactComponentIntersection<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Functional: NativeReactComponentFunctional<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Class: NativeReactComponentClass<*> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const nativeTheme: NativeTheme = {
  background: "papayawhip"
};

// ---- WithComponent ----
const NativeWithComponent1: NativeReactComponentStyled<*> = nativeStyled.View.withComponent('Text');
const NativeWithComponent2: NativeReactComponentStyled<*> = nativeStyled.View.withComponent(NativeWithComponent1);
const NativeWithComponent3: NativeReactComponentStyled<*> = nativeStyled.View.withComponent(NativeAttrs3Class);
// $ExpectError
const NativeWithComponentError1: NativeReactComponentStyled<*> = nativeStyled.View.withComponent(0);
// $ExpectError
const NativeWithComponentError2: NativeReactComponentStyled<*> = nativeStyled.View.withComponent('NotHere');

// ---- WithTheme ----
const NativeComponent: NativeReactComponentFunctional<{ theme: NativeTheme }> = ({ theme }) => (
  <NativeThemeProvider theme={theme}>
    <NativeWrapper>
      <NativeTitleStyled>Hello World, this is my first styled component!</NativeTitleStyled>
    </NativeWrapper>
  </NativeThemeProvider>
);

const NativeComponentWithTheme: NativeReactComponentFunctional<{}> = nativeWithTheme(NativeComponent);

const NativeComponent2: NativeReactComponentFunctional<{}> = () => (
  <NativeThemeProvider theme={outerTheme => outerTheme}>
    <NativeWrapper>
      <NativeTitleStyled>Hello World, this is my first styled component!</NativeTitleStyled>
    </NativeWrapper>
  </NativeThemeProvider>
);

const NativeOpacityKeyFrame: string = nativeKeyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

// $ExpectError
const NativeNoExistingElementWrapper = nativeStyled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const nativeNum: 9 = 9

// $ExpectError
const NativeNoExistingComponentWrapper = nativeStyled()`
  padding: 4em;
  background: papayawhip;
`;

// $ExpectError
const NativeNumberWrapper = nativeStyled(nativeNum)`
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

const NativeNeedsFoo1Class: NativeReactComponentClass<{ foo: string }, { theme: NativeTheme }> = nativeWithTheme(NativeNeedsThemeReactClass);

// $ExpectError
const NativeNeedsFoo0ClassError: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NativeReactClass);
// $ExpectError
const NativeNeedsFoo1ClassError: NativeReactComponentClass<{ foo: string }> = nativeWithTheme(NeedsFoo1Class);
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
const NativeDefaultComponent: NativeReactComponentIntersection<{}> = nativeStyled.View`
  background-color: red;
`;

// $ExpectError
const NativeDefaultComponentError: {} => string = nativeStyled.View`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS ----
declare var View: ({}) => React$Element<*>
const NativeFunctionalComponent: NativeReactComponentFunctional<{ foo: string, theme: NativeTheme }> = props => <View />;

const NativeNeedsFoo1: NativeReactComponentFunctional<{ foo: string, theme: NativeTheme }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo1Error: NativeReactComponentFunctional<{ foo: number }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;

const NativeNeedsFoo2: NativeReactComponentFunctional<{ foo: string, theme: NativeTheme }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;
// $ExpectError
const NativeNeedsFoo2Error: NativeReactComponentFunctional<{ foo: number }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS (nativeWithTheme)----
const NativeNeedsFoo1Functional: NativeReactComponentFunctional<{ foo: string }> = nativeWithTheme(NativeFunctionalComponent);
const NativeNeedsFoo2Functional: NativeReactComponentFunctional<{ foo: string }> = nativeWithTheme(NativeNeedsFoo1Functional);

// $ExpectError
const NativeNeedsFoo1ErrorFunctional: NativeReactComponentFunctional<{ foo: number }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo2ErrorFunctional: NativeReactComponentFunctional<{ foo: string }, { theme: string }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo3ErrorFunctional: NativeReactComponentFunctional<{ foo: number, theme: NativeTheme }> = nativeWithTheme(NativeFunctionalComponent);
// $ExpectError
const NativeNeedsFoo4ErrorFunctional: NativeReactComponentFunctional<{ foo: number }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $ExpectError
const NativeNeedsFoo5ErrorFunctional: NativeReactComponentFunctional<{ foo: string }, { theme: string }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $ExpectError
const NativeNeedsFoo6ErrorFunctional: NativeReactComponentFunctional<{ foo: number }, { theme: NativeTheme }> = nativeWithTheme(NativeNeedsFoo1Functional);
