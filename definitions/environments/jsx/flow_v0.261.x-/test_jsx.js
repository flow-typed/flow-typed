// @flow

const React = require('react');

class CustomComponent extends React.Component<{|prop: string|}, void> {}
class CustomComponentNope extends React.Component<{|prop: string|}, void> {}

var a: ExactReactElement_DEPRECATED<typeof CustomComponent> =
  <CustomComponent prop="asdf" />;
var b: ExactReactElement_DEPRECATED<typeof CustomComponentNope> =
  // $FlowExpectedError[incompatible-type-arg]
  <CustomComponent prop="asdf" />; // Error: Bad class type
var c: ExactReactElement_DEPRECATED<Class<React.Component<{|prop1: string|}, void>>> =
  // $FlowExpectedError[prop-missing]
  <CustomComponent prop="asdf" />; // Error: Props<{prop}> ~> Props<{prop1}>

var d: ExactReactElement_DEPRECATED<any> = <div id="asdf" />;
// We don't allow intrinsic elements to be viewed as React elements with
// different component types.
// $FlowExpectedError[incompatible-type-arg]
var e: ExactReactElement_DEPRECATED<'span'> = <div id="asdf" />;
// No error as long as expectations are consistent, though.
var f: ExactReactElement_DEPRECATED<'div'> = <div id="asdf" />;

const dataProps: {[StringPrefix<'data-'>]: string} = {};
const g = <div {...dataProps} />; // OK

// The builtin $JSXIntrinsics should allow any string

var Div = 'div';
var Bad = 'bad';
var Str: string = 'str';

const empty_exact: {||} = {...null};

<Div />; // This is fine
<Bad />; // This is fine
<Str />; // This is fine

<div {...empty_exact} />;  // This is fine
<bad {...empty_exact} />;  // This is fine

<Div id='str' />; // This is fine
