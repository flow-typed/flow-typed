/** @flow */
import { reduxForm, reducer } from 'redux-form';
import type { InputProps } from 'redux-form';
import React from 'react';
const Input = (props: InputProps) => {
    (props.onChange: (v: string) => mixed);
    (props.onChange: (v: SyntheticEvent) => mixed);
    (props.onUpdate: (v: string) => mixed);
    (props.onUpdate: (v: SyntheticEvent) => mixed);

    // $ExpectError
    (props.onChange: (v: number) => mixed);
    // $ExpectError
    (props.onUpdate: (v: number) => void);
    return (
        <input {...props}/>
    )
}

const form = (): React$Element<any> => (
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
