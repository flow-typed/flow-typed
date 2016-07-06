// @flow
import enzyme from 'enzyme';

import {shallow, mount, render, ShallowWrapper, ReactWrapper} from 'enzyme';

// $ExpectError
enzyme.render();
shallowWrapper = shallow(<div/>);
(render(<div/>, { context: { foo: true } }).text(): string)
const A: bool = render(<div/>, { context: { foo: true } }).find('foo').is('bla');
const B: bool = render(<div/>, { context: { foo: true } }).update().filter('bla').equals(<div/>);

// Test against chaining returning `any`
// $ExpectError
shallow(<div />).children().nonExistentMethod();
const C: ShallowWrapper = shallow(<div />).children();

// Test PredicateFunction
shallow(<div />).findWhere((x: ShallowWrapper) => true);

shallowWrapper.instance();
shallowWrapper.find('someSelector');
shallowWrapper.prop('foo');
shallowWrapper.props().foo;
