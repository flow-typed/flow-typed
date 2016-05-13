/** @flow */
import { reduxForm, reducer } from 'redux-form';
import React from 'react';


const form = (): React$Element => (
  <form name="name">
    <input name="foobar" />
  </form>
);

const connected: typeof React.Component = reduxForm({
  form: 'name',
  fields: ['foobar']
})(form);

// $ExpectError
reduxForm({})(React.Component);

// $ExpectError
reducer({}, null)
