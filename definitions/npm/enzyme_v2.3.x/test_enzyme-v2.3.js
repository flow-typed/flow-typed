// @flow
import {shallow, mount, render, ShallowWrapper, ReactWrapper} from 'enzyme';

// $ExpectError too few arguments
render();

const shallowWrapper = shallow(<div/>);
(render(<div/>, { context: { foo: true } }).text(): string)
const A: bool = render(<div/>, { context: { foo: true } }).find('foo').is('bla');
const B: bool = render(<div/>, { context: { foo: true } }).update().filter('bla').equals(<div/>);

// Test against chaining returning `any`
// $ExpectError
(shallow(<div />).children(): boolean);

(shallow(<div />).children(): ShallowWrapper);

// Test PredicateFunction
shallow(<div />).findWhere((x: ShallowWrapper) => true);

// Test selector functionality

declare class ClassComponent extends React$Component<*, *, *> {
}

const StatelessComponent = () => <div />;

shallow(<div />).find(ClassComponent);
shallow(<div />).find(StatelessComponent);
shallow(<div />).find({a: 1});
// $ExpectError
shallow(<div />).find(true);

shallowWrapper.instance();
shallowWrapper.find('someSelector');
shallowWrapper.prop('foo');
shallowWrapper.props().foo;

(mount(<div />).map((node) => true): Array<boolean>);

(mount(<div />).reduce((acc: number, node, i) => i + 1): Array<number>);
// $ExpectError
(mount(<div />).reduce((acc: number, node, i) => i + 1): Array<boolean>);
(mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<number>);
// $ExpectError
(mount(<div />).reduce((acc, node, i) => i + 1, 0): Array<boolean>);

// Cheerio
render(<div />).contents();
