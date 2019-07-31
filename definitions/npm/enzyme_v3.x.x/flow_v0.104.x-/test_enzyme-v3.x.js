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

configure({
  disableLifecycleMethods: true
});

const shallowWrapper = shallow(<div />);
(render(<div />, { context: { foo: true } }).text(): string);
const A: boolean = render(<div />, { context: { foo: true } })
  .find("foo")
  .is("bla");
const B: boolean = render(<div />, { context: { foo: true } })
  .update()
  .filter("bla")
  .equals(<div />);

// Test against chaining returning `any`
// $ExpectError
(shallow(<div />).children(): boolean);

(shallow(<div />).children(): ShallowWrapper<'div'>);

// Test PredicateFunction
shallow(<div />).findWhere((x: ShallowWrapper<'div'>) => true);

// Test selector functionality

declare class ClassComponent extends React.Component<*, *> {}

const StatelessComponent = () => <div />;

shallow(<div />).find(ClassComponent);
shallow(<div />).find(StatelessComponent);
shallow(<div />).find({ a: 1 });
// $ExpectError
shallow(<div />).find(true);

shallowWrapper.instance();
shallowWrapper.find("someSelector");
shallowWrapper.prop("foo");
shallowWrapper.props().foo;
shallowWrapper.slice();
shallowWrapper.slice(0);
shallowWrapper.slice(0, 1);

shallowWrapper
  .renderProp("render")(1, "hi")
  .find("SomeSelector");

// Need to invoke the returned renderProp fn
// Can't properly be tested
// shallowWrapper
//   .renderProp("render")
//   .find(123)

// shallow's getNode(s) was replaced by getElement(s) in enzyme v3
// $ExpectError
shallowWrapper.getNode();
// $ExpectError
shallowWrapper.getNodes();

shallowWrapper.getElement();
shallowWrapper.getElements();

(mount(<div />).map(node => true): Array<boolean>);

(mount(<div />).reduce((acc: number, node, i) => i + 1): Array<number>);
// $ExpectError
(mount(<div />).reduce((acc: number, node, i) => i + 1): Array<boolean>);
(mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<number>);
// $ExpectError
(mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<boolean>);

(mount(<div />).setProps({}, () => {}): ReactWrapper<'div'>);
// $ExpectError
(mount(<div />).setProps({}, null): ReactWrapper<'div'>);
(mount(<div />).setProps({}): ReactWrapper<'div'>);
// $ExpectError
(mount(<div />).setProps(): ReactWrapper<'div'>);
// $ExpectError
(mount(<div />).setProps(null): ReactWrapper<'div'>);

(mount(<div />).renderProp("render")(1, "hi"): ReactWrapper<'div'>);

// mount's getNode(s) were removed in enzyme v3
// $ExpectError
mount(<div />).getNode();
// $ExpectError
mount(<div />).getNodes();

// Cheerio
render(<div />).contents();

// not in API docs but in example docs
// http://airbnb.io/enzyme/docs/api/
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md#shallow-rendering-api
(shallow(<div />).length: number);

class TestInstance extends React.Component<*> {
  method = () => 'test';
}

// $ExpectError
(mount(<TestInstance />).instance().method: string);
mount(<TestInstance />).instance().method();
(mount(<TestInstance />).instance().method: () => 'test');

// $ExpectError
(shallow(<TestInstance />).instance().method: string);
shallow(<TestInstance />).instance().method();
(shallow(<TestInstance />).instance().method: () => 'test');

(mount(<div />).simulateError(new Error('error')): ReactWrapper<'div'>);
// $ExpectError
(mount(<div />).simulateError('error'): ReactWrapper<'div'>);
(shallow(<div />).simulateError(new Error('error')): ShallowWrapper<'div'>);
// $ExpectError
(shallow(<div />).simulateError('error'): ShallowWrapper<'div'>);

class DeepInstance extends React.Component<{ onChange: () => void, ... }> {}
mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChange();
mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChange();
mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChange();
mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChange();
mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChange();

// $ExpectError
mount(<div><DeepInstance onChange={() => {}}/></div>).find(DeepInstance).instance().props.onChangeX();
// $ExpectError
mount(<div><DeepInstance onChange={() => {}}/></div>).filter(DeepInstance).instance().props.onChangeX();
// $ExpectError
mount(<div><DeepInstance onChange={() => {}}/></div>).closest(DeepInstance).instance().props.onChangeX();
// $ExpectError
mount(<div><DeepInstance onChange={() => {}}/></div>).parents(DeepInstance).instance().props.onChangeX();
// $ExpectError
mount(<div><DeepInstance onChange={() => {}}/></div>).children(DeepInstance).instance().props.onChangeX();


(mount(<div />).contains(<div />): boolean);
(mount(<div />).contains([<div />, <div />]): boolean);
(mount(<div />).containsMatchingElement(<div />): boolean);
(mount(<div />).containsAllMatchingElements(<div />): boolean);
(mount(<div />).containsAllMatchingElements([<div />, <div />]): boolean);
(mount(<div />).containsAnyMatchingElements(<div />): boolean);
(mount(<div />).containsAnyMatchingElements([<div />, <div />]): boolean);
