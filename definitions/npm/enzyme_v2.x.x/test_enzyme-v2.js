// @flow
import enzyme from 'enzyme';

// $ExpectError
enzyme.render();
enzyme.shallow(<div/>);
(enzyme.render(<div/>, { context: { foo: true } }).text(): string)
const A: bool = enzyme.render(<div/>, { context: { foo: true } }).find('foo').is('bla');
const B: bool = enzyme.render(<div/>, { context: { foo: true } }).update().filter('bla').equals(<div/>);
