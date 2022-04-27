// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { describe, it } from 'flow-typed-test';

// All of these tests were originally in the flow repository.

declare function test$getElementById(string): HTMLElement | null;

declare class MyPortalComponent extends React.Component<{ ... }> {}

class MyComponent extends React.Component<{ ... }> {
  render() {
    return ReactDOM.createPortal(
      <MyPortalComponent />,
      // $FlowExpectedError[incompatible-call]
      test$getElementById('portal')
    );
  }
}

class JDiv extends React.Component<{ id: string, ... }> {}

// $FlowExpectedError[incompatible-type]
<JDiv id={42} />;

class Example extends React.Component<{ bar: string, ... }> {
  render() {
    return <div>{this.props.bar}</div>;
  }
}

ReactDOM.render(
  // $FlowExpectedError[prop-missing]
  <Example foo="foo" />,
  // $FlowExpectedError[incompatible-call]
  document.body
);

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  const element = document.getElementById('root');
  if (element) {
    ReactDOM.render(<Clock date={new Date()} />, element);
  }
}

// test-utils tests
import TestUtils from 'react-dom/test-utils';

class MyTestingComponent extends React.Component<{ ... }> {
  render() {
    return <button className="my-button" />;
  }
}

const tree = TestUtils.renderIntoDocument(<MyTestingComponent />);
TestUtils.mockComponent(MyTestingComponent);
TestUtils.mockComponent(MyTestingComponent, 'span');
(TestUtils.isElement(<MyTestingComponent />): boolean);
(TestUtils.isElementOfType(
  <MyTestingComponent />,
  MyTestingComponent
): boolean);
(TestUtils.findRenderedDOMComponentWithClass(tree, 'my-button'): ?Element);
(TestUtils.isDOMComponent(MyTestingComponent): boolean);
(TestUtils.isCompositeComponent(tree): boolean);
(TestUtils.isCompositeComponentWithType(tree, MyTestingComponent): boolean);
(TestUtils.findAllInRenderedTree(
  tree,
  // $FlowExpectedError[prop-missing]
  (child) => child.tagName === 'BUTTON'
): Array<React.Component<any, any>>);
(TestUtils.scryRenderedDOMComponentsWithClass(
  tree,
  'my-button'
): Array<Element>);

const buttonEl = TestUtils.findRenderedDOMComponentWithClass(tree, 'my-button');
if (buttonEl != null) {
  TestUtils.Simulate.click(buttonEl);
}

(TestUtils.scryRenderedDOMComponentsWithTag(tree, 'button'): Array<Element>);
(TestUtils.findRenderedDOMComponentWithTag(tree, 'button'): ?Element);
(TestUtils.scryRenderedComponentsWithType(tree, MyTestingComponent): Array<
  React.Component<any, any>
>);
(TestUtils.findRenderedComponentWithType(
  tree,
  MyTestingComponent
): ?React.Component<any, any>);
TestUtils.act(() => {
  Math.random();
});
// $FlowExpectedError[incompatible-call]
TestUtils.act(() => ({ count: 123 }));
async function runTest() {
  await TestUtils.act(async () => {
    // .. some test code
    await Promise.resolve();
  });
  /* // wishlist -
  act(async () => {
    // some test code
  }); // ideally this should error
  await act(() => {
    // ...
  }); // ideally this should error
  */
}

// render callback tests
declare function test$querySelector(selector: string): HTMLElement | null;

const Example2 = React.createClass({
  propTypes: {},
  render() {
    return <div>Hello</div>;
  },
});

// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), () => {
  console.log('Rendered - arrow callback');
});

// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), function () {
  console.log('Rendered - function callback');
});

// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), 1);
// $FlowExpectedError[prop-missing]
// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), {});
// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), '');
// $FlowExpectedError[incompatible-call]
ReactDOM.render(<Example2 />, test$querySelector('#site'), null);

describe('react-dom/client', () => {
  describe('createRoot', () => {
    it('works', () => {
      declare var container: HTMLElement;

      const root = createRoot(container);
      (root.render(<div />): void);
      (root.unmount(): void);
    });

    it('needs createRoot to have valid param', () => {
      // $FlowExpectedError[incompatible-call] needs to be non-null container
      createRoot(document.getElementById('root'));
      // $FlowExpectedError[incompatible-call] takes container only
      createRoot('test');
    });

    it('unmount takes no params and returns nothing', () => {
      declare var container: HTMLElement;

      const root = createRoot(container);
      // $FlowExpectedError[extra-arg]
      root.unmount('test');
      // $FlowExpectedError[incompatible-cast]
      (root.unmount(): string);
    });
  });

  describe('hydrateRoot', () => {
    it('works', () => {
      declare var container: HTMLElement;
      hydrateRoot(container, <div />);
      hydrateRoot(container);
    });

    it('errors', () => {
      declare var container: HTMLElement;

      // $FlowExpectedError[incompatible-call] can't be empty
      hydrateRoot();
    });
  });
});
