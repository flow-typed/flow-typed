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

// $FlowExpectedError label is required, value not required
<C statistics={[
  {},
  {label:"",value:undefined},
]}/>;

// $FlowExpectedError label is required, value not required
var props: Array<{label: string, value?: number}> = [
  {},
  {label:"",value:undefined},
];

PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent');

// $FlowExpectedError missing arguments
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' });
// $FlowExpectedError missing argument
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value');

// $FlowExpectedError property not found
PropTypes.checkPropTypes({ bar: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent'); // error: property not found

// $FlowExpectedError number -> string
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => 123);
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => null);
PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' }, 'value', 'TestComponent', () => undefined);
