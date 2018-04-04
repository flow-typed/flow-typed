// @flow

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { describe, it } from 'flow-typed-test';

describe('React Component', () => {
  const styles = { test: '123' };

  class ExampleModule extends Component<{
    foo: string,
    styles: typeof styles,
  }> {
    render() {
      return <div className={this.props.styles}>{this.props.foo}</div>;
    }
  }
  
  it('React Component can be declared', () => {
    const ExampleCSSModules = CSSModules(ExampleModule, styles);
    const ExampleCSSModules2 = CSSModules(ExampleModule, styles, { allowMultiple: true });
    class Working extends Component<{}> {
      render() {
        return <ExampleCSSModules foo="bar" />;
      }
    }
  });
  
  it('React Component can be undeclared', () => {
    const ExampleCSSModules = CSSModules(ExampleModule, styles);
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
  });  
});

describe('Stateless Functional Component', () => {
  const styles = { test: '123' };
  type Props = {
    foo: string,
    styles: typeof styles,
  };
  type State = {};

  // Props and State
  const StatelessComponent = (props: Props, state: State) => {
    return (<div>hoge</div>)
  }
  // Props only
  const StatelessComponentPropsOnly = (props: Props) => {
    return (<div>hoge</div>)
  }

  it('Stateless Functional Component can be declared', () => {
    const StatelessCSSComponent = CSSModules(StatelessComponent, styles);
    CSSModules(StatelessComponent, styles, { allowMultiple: true });
    CSSModules(StatelessComponentPropsOnly, styles);
    CSSModules(StatelessComponentPropsOnly, styles, { allowMultiple: true });

    class Working extends Component<{}> {
      render() {
        return <StatelessCSSComponent foo="bar" />;
      }
    }
  });

  it('Stateless Functional Component can be undeclared', () => {
    class Failure extends Component<{}> {
      render() {
        // $ExpectError Unwrapped component won't be passed `styles`.
        return <StatelessComponent foo="bar" />;
      }
    }
  });
});

