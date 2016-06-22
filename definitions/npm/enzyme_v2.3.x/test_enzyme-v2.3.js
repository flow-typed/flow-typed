// @flow
import enzyme from 'enzyme';

// $ExpectError
enzyme.render();
shallowWrapper = enzyme.shallow(<div/>);
(enzyme.render(<div/>, { context: { foo: true } }).text(): string)
const A: bool = enzyme.render(<div/>, { context: { foo: true } }).find('foo').is('bla');
const B: bool = enzyme.render(<div/>, { context: { foo: true } }).update().filter('bla').equals(<div/>);

shallowWrapper.instance();
shallowWrapper.find('someSelector');
shallowWrapper.prop('foo');
shallowWrapper.props().foo;
