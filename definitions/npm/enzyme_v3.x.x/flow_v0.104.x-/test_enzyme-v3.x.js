// @flow
import * as React from "react";
import {
  configure,
  shallow,
  mount,
  render,
  type ShallowWrapper,
  type ReactWrapper
} from "enzyme";
import { describe, it } from 'flow-typed-test';

configure({
  disableLifecycleMethods: true
});

describe('render', () => {
  (render(<div/>, {context: {foo: true}}).text(): string);
  const A: boolean = render(<div/>, {context: {foo: true}})
    .find("foo")
    .is("bla");
  const B: boolean = render(<div/>, {context: {foo: true}})
    .update()
    .filter("bla")
    .equals(<div/>);

  function opaqueNode(): React$Node {
    return <span>who knows what I am</span>;
  }
  render(opaqueNode());

  // Cheerio
  render(<div />).contents();
});

// Tests for functions present in both shallow() and mount()
describe('Wrapper', () => {
  class DeepInstance extends React.Component<{ onChange: () => void, ... }> {}

  it('children', () => {
    // Test against chaining returning `any`
    // $FlowExpectedError wrong return type
    (shallow(<div/>).children(): boolean);
    (shallow(<div/>).children(): ShallowWrapper<'div'>);

    mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChange();
    // $FlowExpectedError
    mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChangeX();
  });

  it('closest', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChange();
    // $FlowExpectedError
    mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChangeX();
  });

  it('contains', () => {
    (mount(<div/>).contains(<div/>): boolean);
    (mount(<div/>).contains([<div/>, <div/>]): boolean);
  });

  it('containsAllMatchingElements', () => {
    (mount(<div />).containsAllMatchingElements([<div />, <div />]): boolean);
    // $FlowExpectedError - "nodes should be an Array" (from docs and source code)
    (mount(<div />).containsAllMatchingElements(<div />));
  });

  it('containsAnyMatchingElements', () => {
    (mount(<div />).containsAnyMatchingElements([<div />, <div />]): boolean);
    // $FlowExpectedError - "nodes should be an Array" (from docs and source code)
    (mount(<div />).containsAnyMatchingElements(<div />));
  });

  it('containsMatchingElement', () => {
    (mount(<div />).containsMatchingElement(<div />): boolean);
  });

  it('equals', () => {
    (shallow(<div/>).equals(<div/>): boolean);

    // example from docs
    const MyComponent = () => <div className="foo bar" />;
    (shallow(<MyComponent />).equals(<div className="foo bar" />): boolean);
  });

  it('filter', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChange();
    // $FlowExpectedError
    mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChangeX();
  });

  it('find', () => {
    // Test selector functionality
    declare class ClassComponent extends React.Component<*, *> {}
    const StatelessComponent = () => <div />;

    shallow(<div />).find(ClassComponent);
    shallow(<div />).find(StatelessComponent);
    shallow(<div />).find({ a: 1 });
    // $FlowExpectedError
    shallow(<div />).find(true);
    shallow(<div/>).find("someSelector");
    shallow(<div/>).renderProp("render")(1, "hi").find("SomeSelector");

    // Need to invoke the returned renderProp fn
    // Can't properly be tested
    // shallowWrapper
    //   .renderProp("render")
    //   .find(123)

    mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChange();
    // $FlowExpectedError
    mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChangeX();
  });

  it('findWhere', () => {
    // Test PredicateFunction
    shallow(<div/>).findWhere((x: ShallowWrapper<'div'>) => true);
  });

  it('get', () => {
    // example from docs
    const Foo = () => <div>some text</div>;
    const MyComponent = () => <Foo foo="bar"/>;
    (shallow(<MyComponent />).find(Foo).get(0).props.foo: string);
  });

  it('instance', () => {
    class TestInstance extends React.Component<*> {
      method = () => 'test';
    }

    shallow(<div/>).instance();

    // $FlowExpectedError
    (shallow(<TestInstance />).instance().method: string);
    shallow(<TestInstance />).instance().method();
    (shallow(<TestInstance />).instance().method: () => 'test');

    // $FlowExpectedError
    (mount(<TestInstance />).instance().method: string);
    mount(<TestInstance />).instance().method();
    (mount(<TestInstance />).instance().method: () => 'test');
  });

  describe('invoke', () => {
    describe('invoke event handler prop on shallowWrapper', () => {
      it('test', () => {
        // This is common use case for triggering event handler for user action
        const shallowWrapper = shallow(<div onClick={() => {}} />);
        shallowWrapper.invoke('onClick')();
      });
    });

    describe('invoke regular function prop on shallowWrapper', () => {
      // Less common use case, allowable by enzyime for prop to simply be a function

      it('user uses type refinement', () => {
        const shallowWrapper = shallow(<div getName={() => {return 'test';}} />);
        const name = shallowWrapper.invoke('getName')();

        if (typeof name === 'string') {
          name.substring(0);
        }
      });

      it('user does not refine type', () => {
        const shallowWrapper = shallow(<div getNumber={() => {return 'not a number';}} />);
        const string = shallowWrapper.invoke('getNumber')();

        // $FlowExpectedError
        name.toFixed();
      });
    });
  });

  it('length', () => {
    // not in API docs but in example docs
    // http://airbnb.io/enzyme/docs/api/
    // https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md#shallow-rendering-api
    (shallow(<div />).length: number);
  });

  it('map', () => {
    (mount(<div />).map(node => true): Array<boolean>);
  });

  it('matchesElement', () => {
    (mount(<div />).matchesElement(<div />): boolean);
  });

  it('parents', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChange();
    // $FlowExpectedError
    mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChangeX();
  });

  it('prop', () => {
    shallow(<div/>).prop("foo");
  });

  it('props', () => {
    shallow(<div/>).props().foo;
  });

  it('reduce', () => {
    (mount(<div />).reduce((acc: number, node, i) => i + 1): Array<number>);
    // $FlowExpectedError
    (mount(<div />).reduce((acc: number, node, i) => i + 1): Array<boolean>);
    (mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<number>);
    // $FlowExpectedError
    (mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<boolean>);
  });

  it('renderProp', () => {
    (mount(<div />).renderProp("render")(1, "hi"): ReactWrapper<'div'>);
  });

  it('slice', () => {
    shallow(<div/>).slice();
    shallow(<div/>).slice(0);
    shallow(<div/>).slice(0, 1);
  });

  it('simulateError', () => {
    (mount(<div />).simulateError(new Error('error')): ReactWrapper<'div'>);
    // $FlowExpectedError
    (mount(<div />).simulateError('error'): ReactWrapper<'div'>);
    (shallow(<div />).simulateError(new Error('error')): ShallowWrapper<'div'>);
    // $FlowExpectedError
    (shallow(<div />).simulateError('error'): ShallowWrapper<'div'>);
  });

  it('setProps', () => {
    (mount(<div />).setProps({}, () => {}): ReactWrapper<'div'>);
    // $FlowExpectedError
    (mount(<div />).setProps({}, null): ReactWrapper<'div'>);
    (mount(<div />).setProps({}): ReactWrapper<'div'>);
    // $FlowExpectedError
    (mount(<div />).setProps(): ReactWrapper<'div'>);
    // $FlowExpectedError
    (mount(<div />).setProps(null): ReactWrapper<'div'>);
  });
});

describe('ShallowWrapper', () => {
  it('getElement', () => {
    (shallow(<div/>).getElement(): React$Element<React.ComponentType<{||}>>);

    // example from docs
    const element = (
      <div>
        <span />
        <span />
      </div>
    );
    function MyComponent() {
      return element;
    }
    (shallow(<MyComponent />).getElement(): typeof element);
  });

  it('getElements', () => {
    (shallow(<div/>).getElements(): React$Element<React.ComponentType<{||}>>[]);

    // example from docs
    const one = <span />;
    const two = <span />;
    function Test() {
      return (
        <div>
          {one}
          {two}
        </div>
      );
    }
    (shallow(<Test />).find('span').getElements(): Array<typeof one>);
  });

  it('deprecated methods should not be present', () => {
    // shallow's getNode(s) was replaced by getElement(s) in enzyme v3
    // $FlowExpectedError
    shallow(<div/>).getNode();
    // $FlowExpectedError
    shallow(<div/>).getNodes();
  });
});


describe('mount', () => {
  it('deprecated methods should not be present', () => {
    // mount's getNode(s) were removed in enzyme v3
    // $FlowExpectedError
    mount(<div />).getNode();
    // $FlowExpectedError
    mount(<div />).getNodes();
  });
});
