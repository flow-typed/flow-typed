// @flow

var React = require('react');
var PropTypes = require('prop-types');

var C = React.createClass({
  propTypes: {
    statistics: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number,
    })).isRequired,
  }
});

// $ExpectError label is required, value not required
<C statistics={[
  {},
  {label:"",value:undefined},
]}/>;

// $ExpectError label is required, value not required
var props: Array<{label: string, value?: number}> = [
  {},
  {label:"",value:undefined},
];

PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent');

// $ExpectError missing arguments
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' });
// $ExpectError missing argument
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value');

// $ExpectError property not found
PropTypes.checkPropTypes({ bar: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent'); // error: property not found

// $ExpectError number -> string
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => 123);
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => null);
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => undefined);
