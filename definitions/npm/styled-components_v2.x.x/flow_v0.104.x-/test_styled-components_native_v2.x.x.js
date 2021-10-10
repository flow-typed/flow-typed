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
  ReactComponentFunctional as NativeReactComponentFunctional,
  ReactComponentFunctionalUndefinedDefaultProps as NativeReactComponentFunctionalUndefinedDefaultProps,
  ReactComponentClass as NativeReactComponentClass,
  ReactComponentStyled as NativeReactComponentStyled,
  ReactComponentStyledTaggedTemplateLiteral as NativeReactComponentStyledTaggedTemplateLiteral,
  ReactComponentUnion as NativeReactComponentUnion,
  ReactComponentIntersection as NativeReactComponentIntersection,
} from 'styled-components'

const NativeTitleTaggedTemplateLiteral: NativeReactComponentStyledTaggedTemplateLiteral<any> = nativeStyled.Text;

const NativeTitleStyled: NativeReactComponentStyled<any> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleGeneric: NativeReactComponentIntersection<any> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleFunctional: NativeReactComponentFunctional<any> = nativeStyled.Text`
  font-size: 1.5em;
`;

const NativeTitleClass: NativeReactComponentClass<any> = nativeStyled.Text`
  font-size: 1.5em;
`;

declare var nativeNeedsReactComponentFunctional: NativeReactComponentFunctional<any> => void
declare var nativeNeedsReactComponentClass: NativeReactComponentClass<any> => void

nativeNeedsReactComponentFunctional(NativeTitleStyled)
nativeNeedsReactComponentClass(NativeTitleStyled)

const NativeExtendedTitle: NativeReactComponentIntersection<any> = nativeStyled(NativeTitleStyled)`
  font-size: 2em;
`;

const NativeWrapper: NativeReactComponentIntersection<any> = nativeStyled.View`
  padding: 4em;
  background: ${({theme}) => theme.background};
`;

// ---- EXTEND ----
const NativeAttrs0ReactComponent: NativeReactComponentStyled<any> = nativeStyled.View.extend``;
const NativeAttrs0ExtendReactComponent: NativeReactComponentIntersection<any> = NativeAttrs0ReactComponent.extend``;

const NativeAttrs0SyledComponent: NativeReactComponentStyledTaggedTemplateLiteral<any> = nativeStyled.View;
const NativeAttrs0ExtendStyledComponent: NativeReactComponentIntersection<any> = NativeAttrs0SyledComponent.extend``;

// ---- ATTRIBUTES ----
const NativeAttrs1: NativeReactComponentStyledTaggedTemplateLiteral<any> = nativeStyled.View.attrs({
  testProp: 'foo'
});

// $FlowExpectedError
const NativeAttrs1Error: NativeReactComponentStyledTaggedTemplateLiteral<any> = nativeStyled.View.attrs({
  testProp: 'foo'
})``;

declare var needsString: string => void

nativeNeedsReactComponentFunctional(nativeStyled.View.attrs({})``)
nativeNeedsReactComponentClass(nativeStyled.View.attrs({})``)

// $FlowExpectedError
needsString(nativeStyled.View.attrs({})``)

const NativeAttrs2: NativeReactComponentStyledTaggedTemplateLiteral<any> = nativeStyled.View
  .attrs({
    testProp1: 'foo'
  })
  .attrs({
    testProp2: 'bar'
  });

const NativeAttrs3Styled: NativeReactComponentStyled<any> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Generic: NativeReactComponentIntersection<any> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Functional: NativeReactComponentFunctional<any> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const NativeAttrs3Class: NativeReactComponentClass<any> = nativeStyled.View.attrs({
  testProp: 'foo'
})`
  background-color: red;
`;

const nativeTheme: NativeTheme = {
  background: "papayawhip"
};

// ---- WithComponent ----
const NativeWithComponent1: NativeReactComponentStyled<any> = nativeStyled.View.withComponent('Text');
const NativeWithComponent2: NativeReactComponentStyled<any> = nativeStyled.View.withComponent(NativeWithComponent1);
const NativeWithComponent3: NativeReactComponentStyled<any> = nativeStyled.View.withComponent(NativeAttrs3Class);
const NativeWithComponent4: NativeReactComponentStyled<any> = nativeStyled('View').withComponent('Text');
const NativeWithComponent5: NativeReactComponentStyled<any> = nativeStyled('View').withComponent(NativeWithComponent1);
const NativeWithComponent6: NativeReactComponentStyled<any> = nativeStyled('View').withComponent(NativeAttrs3Class);
// $FlowExpectedError
const NativeWithComponentError1: NativeReactComponentStyled<any> = nativeStyled.View.withComponent(0);
// $FlowExpectedError
const NativeWithComponentError2: NativeReactComponentStyled<any> = nativeStyled.View.withComponent('NotHere');

class NativeCustomComponentError3 extends React.Component<{ foo: string, ... }> {
  render() { return <div />; }
}

// $FlowExpectedError
const NativeWithComponentError3 = nativeStyled(NativeCustomComponentError3).withComponent('Text');
// $FlowExpectedError
const NativeWithComponentError4 = nativeStyled(NativeCustomComponentError3).withComponent(NativeWithComponent1);
// $FlowExpectedError
const NativeWithComponentError5 = nativeStyled(NativeCustomComponentError3).withComponent(NativeAttrs3Class);
// $FlowExpectedError
const NativeWithComponentError6 = nativeStyled(NativeCustomComponentError3).withComponent(0);
// $FlowExpectedError
const NativeWithComponentError7 = nativeStyled(NativeCustomComponentError3).withComponent('NotHere');

// ---- WithTheme ----
const NativeComponent: NativeReactComponentFunctionalUndefinedDefaultProps<{ theme: NativeTheme, ... }> = ({ theme }) => (
  <NativeThemeProvider theme={theme}>
    <NativeWrapper>
      <NativeTitleStyled>Hello World, this is my first styled component!</NativeTitleStyled>
    </NativeWrapper>
  </NativeThemeProvider>
);

const NativeComponentWithTheme: NativeReactComponentFunctionalUndefinedDefaultProps<{...}> = nativeWithTheme(NativeComponent);

const NativeComponent2: NativeReactComponentFunctionalUndefinedDefaultProps<{...}> = () => (
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

// $FlowExpectedError
const NativeNoExistingElementWrapper = nativeStyled.nonexisting`
  padding: 4em;
  background: papayawhip;
`;

const nativeNum: 9 = 9

// $FlowExpectedError
const NativeNoExistingComponentWrapper = nativeStyled()`
  padding: 4em;
  background: papayawhip;
`;

// $FlowExpectedError
const NativeNumberWrapper = nativeStyled(nativeNum)`
  padding: 4em;
  background: papayawhip;
`;

// ---- COMPONENT CLASS TESTS ----
class NativeNeedsThemeReactClass extends React.Component<{
  foo: string,
  theme: NativeTheme,
  ...
}> {
  render() { return <div />; }
}

class NativeReactClass extends React.Component<{ foo: string, ... }> {
  render() { return <div />; }
}

const NativeStyledClass: NativeReactComponentClass<{
  foo: string,
  theme: NativeTheme,
  ...
}> = nativeStyled(NativeNeedsThemeReactClass)`
  color: red;
`;

const NativeNeedsFoo1Class: NativeReactComponentClass<{ foo: string, ... }, { theme: NativeTheme, ... }> = nativeWithTheme(NativeNeedsThemeReactClass);

// $FlowExpectedError
const NativeNeedsFoo0ClassError: NativeReactComponentClass<{ foo: string, ... }> = nativeWithTheme(NativeReactClass);
// $FlowExpectedError
const NativeNeedsFoo1ClassError: NativeReactComponentClass<{ foo: string, ... }> = nativeWithTheme(NeedsFoo1Class);
// $FlowExpectedError
const NativeNeedsFoo1ErrorClass: NativeReactComponentClass<{ foo: number, ... }> = nativeWithTheme(NativeNeedsThemeReactClass);
// $FlowExpectedError
const NativeNeedsFoo2ErrorClass: NativeReactComponentClass<{ foo: string, ... }, { theme: string, ... }> = nativeWithTheme(NativeNeedsThemeReactClass);
// $FlowExpectedError
const NativeNeedsFoo3ErrorClass: NativeReactComponentClass<{
  foo: string,
  theme: NativeTheme,
  ...
}> = nativeWithTheme(NativeNeedsFoo1Class);
// $FlowExpectedError
const NativeNeedsFoo4ErrorClass: NativeReactComponentClass<{ foo: number, ... }> = nativeWithTheme(NativeNeedsFoo1Class);
// $FlowExpectedError
const NativeNeedsFoo5ErrorClass: NativeReactComponentClass<{
  foo: string,
  theme: string,
  ...
}> = nativeWithTheme(NativeNeedsFoo1Class);

// ---- INTERPOLATION TESTS ----
const nativeInterpolation: Array<NativeInterpolation> = nativeStyled.css`
  background-color: red;
`;

// $FlowExpectedError
const nativeInterpolationError: Array<NativeInterpolation | boolean> = nativeStyled.css`
  background-color: red;
`;


// ---- DEFAULT COMPONENT TESTS ----
const NativeDefaultComponent: NativeReactComponentIntersection<{...}> = nativeStyled.View`
  background-color: red;
`;

// $FlowExpectedError
const NativeDefaultComponentError: {...} => string = nativeStyled.View`
  background-color: red;
`;

// ---- FUNCTIONAL COMPONENT TESTS ----
declare var View: ({...}) => React$Element<any>
const NativeFunctionalComponent: NativeReactComponentFunctionalUndefinedDefaultProps<{
  foo: string,
  theme: NativeTheme,
  ...
}> = props => <View />;

const NativeNeedsFoo1: NativeReactComponentFunctionalUndefinedDefaultProps<{
  foo: string,
  theme: NativeTheme,
  ...
}> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;
// $FlowExpectedError
const NativeNeedsFoo1Error: NativeReactComponentFunctionalUndefinedDefaultProps<{ foo: number, ... }> = nativeStyled(NativeFunctionalComponent)`
  background-color: red;
`;

const NativeNeedsFoo2: NativeReactComponentFunctionalUndefinedDefaultProps<{
  foo: string,
  theme: NativeTheme,
  ...
}> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;
// $FlowExpectedError
const NativeNeedsFoo2Error: NativeReactComponentFunctionalUndefinedDefaultProps<{ foo: number, ... }> = nativeStyled(NativeNeedsFoo1)`
  background-color: red;
`;

const NativeNeedsNothingInferred = nativeStyled(() => <View />);

// ---- FUNCTIONAL COMPONENT TESTS (nativeWithTheme)----
const NativeNeedsFoo1Functional: NativeReactComponentFunctionalUndefinedDefaultProps<{
  foo: string,
  theme: NativeTheme,
  ...
}> = nativeWithTheme(NativeFunctionalComponent);
const NativeNeedsFoo2Functional: NativeReactComponentFunctionalUndefinedDefaultProps<{ foo: string, ... }> = nativeWithTheme(NativeNeedsFoo1Functional);

const NativeNeedsFoo1FunctionalDefaultProps: NativeReactComponentFunctional<{
  foo: string,
  theme: NativeTheme,
  ...
}, { theme: NativeTheme, ... }> = nativeWithTheme(NativeFunctionalComponent);
const NativeNeedsFoo2FunctionalDefaultProps: NativeReactComponentFunctional<{ foo: string, ... }, { theme: NativeTheme, ... }> = nativeWithTheme(NativeNeedsFoo1FunctionalDefaultProps);

// $FlowExpectedError
const NativeNeedsFoo1ErrorFunctional: NativeReactComponentFunctionalUndefinedDefaultProps<{ foo: number, ... }> = nativeWithTheme(NativeFunctionalComponent);
// $FlowExpectedError
const NativeNeedsFoo2ErrorFunctional: NativeReactComponentFunctional<{ foo: string, ... }, { theme: string, ... }> = nativeWithTheme(NativeFunctionalComponent);
// $FlowExpectedError
const NativeNeedsFoo3ErrorFunctional: NativeReactComponentFunctionalUndefinedDefaultProps<{
  foo: number,
  theme: NativeTheme,
  ...
}> = nativeWithTheme(NativeFunctionalComponent);
// $FlowExpectedError
const NativeNeedsFoo4ErrorFunctional: NativeReactComponentFunctionalUndefinedDefaultProps<{ foo: number, ... }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $FlowExpectedError
const NativeNeedsFoo5ErrorFunctional: NativeReactComponentFunctional<{ foo: string, ... }, { theme: string, ... }> = nativeWithTheme(NativeNeedsFoo1Functional);
// $FlowExpectedError
const NativeNeedsFoo6ErrorFunctional: NativeReactComponentFunctional<{ foo: number, ... }, { theme: NativeTheme, ... }> = nativeWithTheme(NativeNeedsFoo1Functional);
