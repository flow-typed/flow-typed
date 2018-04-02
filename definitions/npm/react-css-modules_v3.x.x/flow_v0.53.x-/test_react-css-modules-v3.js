// @flow

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

const styles = { test: '123' };

class ExampleModule extends Component<{
  foo: string,
  styles: typeof styles,
}> {
  render() {
    return <div className={this.props.styles}>{this.props.foo}</div>;
  }
}

type Props = {};

type State = {};

const ExampleModule2 = (props: Props, state: State) => {
  return (<div>hoge</div>)
}

const ExampleModule3 = (props: Props, state: State) => {
  return (<div>hoge</div>)
}

const ExampleCSSModules = CSSModules(ExampleModule, styles);
const ExampleCSSModules2 = CSSModules(ExampleModule, styles, { allowMultiple: true });
const ExampleCSSModules3 = CSSModules(ExampleModule2, styles);
const ExampleCSSModules4 = CSSModules(ExampleModule2, styles, { allowMultiple: true });
const ExampleCSSModules5 = CSSModules(ExampleModule3, styles);
const ExampleCSSModules6 = CSSModules(ExampleModule3, styles, { allowMultiple: true });

// $ExpectError invalid module option.
const BustedCSSModule = CSSModules(ExampleModule, styles, { wubbaLubba: 'dub-dub' });

class Failure1 extends Component<{}> {
  render() {

    // $ExpectError Missing prop `foo` will be caught.
    return <ExampleCSSModules />;
  }
}

class Failure2 extends Component<{}> {
  render() {

    // $ExpectError Unwrapped component won't be passed `styles`.
    return <ExampleModule foo="bar" />;
  }
}

class Working extends Component<{}> {
  render() {
    return <ExampleCSSModules foo="bar" />;
  }
}
