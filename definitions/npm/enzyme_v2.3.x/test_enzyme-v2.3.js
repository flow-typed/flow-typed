// @flow
import enzyme from 'enzyme';
import {shallow, ShallowWrapper} from 'enzyme';

// $ExpectError
enzyme.render();
shallowWrapper = enzyme.shallow(<div/>);
(enzyme.render(<div/>, { context: { foo: true } }).text(): string)
const A: bool = enzyme.render(<div/>, { context: { foo: true } }).find('foo').is('bla');
const B: bool = enzyme.render(<div/>, { context: { foo: true } }).update().filter('bla').equals(<div/>);

// $ExpectError
enzyme.shallow(<div />).children().nonExistentMethod();
const C: ShallowWrapper = shallow(<div />).children();

// Test PredicateFunction
shallow(<div />).findWhere((x: ShallowWrapper) => true);

shallowWrapper.instance();
shallowWrapper.find('someSelector');
shallowWrapper.prop('foo');
shallowWrapper.props().foo;
