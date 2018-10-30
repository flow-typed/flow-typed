// @flow
import * as React from "react";
import Enzyme, {
  shallow,
  mount,
  render,
  ShallowWrapper,
  ReactWrapper
} from "enzyme";

Enzyme.configure({
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

(shallow(<div />).children(): ShallowWrapper);

// Test PredicateFunction
shallow(<div />).findWhere((x: ShallowWrapper) => true);

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
shallowWrapper.slice()
shallowWrapper.slice(0)
shallowWrapper.slice(0, 1)

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
