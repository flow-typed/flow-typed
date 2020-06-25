// @flow
const React = require('react');
const createReactClass = require('create-react-class');

const A = createReactClass({
  mixins: [{ propTypes: { foo: React.PropTypes.string.isRequired } }],
  propTypes: { bar: React.PropTypes.number.isRequired },
  m() {
    // $FlowExpectedError string -> empty
    (this.props.foo: empty);
    // $FlowExpectedError number -> empty
    (this.props.bar: empty);
  }
});


import createReactClass2 from 'create-react-class';

const B = createReactClass2({
  mixins: [{ propTypes: { foo: React.PropTypes.string.isRequired } }],
  propTypes: { bar: React.PropTypes.number.isRequired },
  m() {
    // $FlowExpectedError string -> empty
    (this.props.foo: empty);
    // $FlowExpectedError number -> empty
    (this.props.bar: empty);
  }
});
