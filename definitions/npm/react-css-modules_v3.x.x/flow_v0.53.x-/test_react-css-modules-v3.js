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

const ExampleCSSModules = CSSModules(ExampleModule, styles);
const ExampleCSSModules2 = CSSModules(ExampleModule, styles, { allowMultiple: true });

// $ExpectError invalid module option.
const BustedCSSModule = CSSModules(ExampleModule, styles, { wubbaLubba: 'dub-dub' });
1
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
