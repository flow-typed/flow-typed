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

  it('find', () => {
    // Test selector functionality
    declare class ClassComponent extends React.Component<*, *> {}
    const StatelessComponent = () => <div />;

    shallow(<div />).find(ClassComponent);
    shallow(<div />).find(StatelessComponent);
    shallow(<div />).find({ a: 1 });
    // $ExpectError
    shallow(<div />).find(true);
    shallow(<div/>).find("someSelector");
    shallow(<div/>).renderProp("render")(1, "hi").find("SomeSelector");

    // Need to invoke the returned renderProp fn
    // Can't properly be tested
    // shallowWrapper
    //   .renderProp("render")
    //   .find(123)

    mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChange();
    // $ExpectError
    mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChangeX();
  });

  it('findWhere', () => {
    // Test PredicateFunction
    shallow(<div/>).findWhere((x: ShallowWrapper<'div'>) => true);
  });

  it('filter', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChange();
    // $ExpectError
    mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChangeX();
  });

  it('closest', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChange();
    // $ExpectError
    mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChangeX();
  });

  it('parents', () => {
    mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChange();
    // $ExpectError
    mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChangeX();
  });

  it('children', () => {
    // Test against chaining returning `any`
    // $ExpectError wrong return type
    (shallow(<div/>).children(): boolean);
    (shallow(<div/>).children(): ShallowWrapper<'div'>);

    mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChange();
    // $ExpectError
    mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChangeX();
  });

  it('contains', () => {
    (mount(<div/>).contains(<div/>): boolean);
    (mount(<div/>).contains([<div/>, <div/>]): boolean);
  });

  it('containsMatchingElement', () => {
    (mount(<div />).containsMatchingElement(<div />): boolean);
  });

  it('containsAllMatchingElements', () => {
    (mount(<div />).containsAllMatchingElements(<div />): boolean);
    (mount(<div />).containsAllMatchingElements([<div />, <div />]): boolean);
  });

  it('containsAnyMatchingElements', () => {
    (mount(<div />).containsAnyMatchingElements(<div />): boolean);
    (mount(<div />).containsAnyMatchingElements([<div />, <div />]): boolean);
  });

  it('get', () => {
    const Foo = () => <div>some text</div>
    const MyComponent = () => <Foo foo="bar"/>

    // example from docs
    const wrapper = shallow(<MyComponent />);
    (wrapper.find(Foo).get(0).props.foo: string);
  });

  it('instance', () => {
    class TestInstance extends React.Component<*> {
      method = () => 'test';
    }

    shallow(<div/>).instance();

    // $ExpectError
    (shallow(<TestInstance />).instance().method: string);
    shallow(<TestInstance />).instance().method();
    (shallow(<TestInstance />).instance().method: () => 'test');

    // $ExpectError
    (mount(<TestInstance />).instance().method: string);
    mount(<TestInstance />).instance().method();
    (mount(<TestInstance />).instance().method: () => 'test');
  });

  it('map', () => {
    (mount(<div />).map(node => true): Array<boolean>);
  });

  it('prop', () => {
    shallow(<div/>).prop("foo");
  });

  it('props', () => {
    shallow(<div/>).props().foo;
  });

  it('slice', () => {
    shallow(<div/>).slice();
    shallow(<div/>).slice(0);
    shallow(<div/>).slice(0, 1);
  });

  it('simulateError', () => {
    (mount(<div />).simulateError(new Error('error')): ReactWrapper<'div'>);
    // $ExpectError
    (mount(<div />).simulateError('error'): ReactWrapper<'div'>);
    (shallow(<div />).simulateError(new Error('error')): ShallowWrapper<'div'>);
    // $ExpectError
    (shallow(<div />).simulateError('error'): ShallowWrapper<'div'>);
  });

  it('setProps', () => {
    (mount(<div />).setProps({}, () => {}): ReactWrapper<'div'>);
    // $ExpectError
    (mount(<div />).setProps({}, null): ReactWrapper<'div'>);
    (mount(<div />).setProps({}): ReactWrapper<'div'>);
    // $ExpectError
    (mount(<div />).setProps(): ReactWrapper<'div'>);
    // $ExpectError
    (mount(<div />).setProps(null): ReactWrapper<'div'>);
  });


  it('reduce', () => {
    (mount(<div />).reduce((acc: number, node, i) => i + 1): Array<number>);
    // $ExpectError
    (mount(<div />).reduce((acc: number, node, i) => i + 1): Array<boolean>);
    (mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<number>);
    // $ExpectError
    (mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<boolean>);
  });

  it('renderProp', () => {
    (mount(<div />).renderProp("render")(1, "hi"): ReactWrapper<'div'>);
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

        // $ExpectError
        name.toFixed();
      });
    });
  });
});

describe('shallow', () => {
  it('getElement', () => {
    shallow(<div/>).getElement();
  });

  it('getElements', () => {
    shallow(<div/>).getElements();
  });

  it('.length', () => {
    // not in API docs but in example docs
    // http://airbnb.io/enzyme/docs/api/
    // https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md#shallow-rendering-api
    (shallow(<div />).length: number);
  });

  it('deprecated methods should not be present', () => {
    // shallow's getNode(s) was replaced by getElement(s) in enzyme v3
    // $ExpectError
    shallow(<div/>).getNode();
    // $ExpectError
    shallow(<div/>).getNodes();
  });
});


describe('mount', () => {
  it('deprecated methods should not be present', () => {
    // mount's getNode(s) were removed in enzyme v3
    // $ExpectError
    mount(<div />).getNode();
    // $ExpectError
    mount(<div />).getNodes();
  });
});
