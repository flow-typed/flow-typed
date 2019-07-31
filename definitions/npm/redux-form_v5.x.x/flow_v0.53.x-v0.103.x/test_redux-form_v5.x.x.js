/** @flow */
import * as React from 'react';
import { reduxForm, reducer } from 'redux-form';
import type { InputProps } from 'redux-form';

const Input = (props: InputProps) => {
    (props.onChange: (v: string) => mixed);
    (props.onChange: (v: SyntheticEvent<any>) => mixed);
    (props.onUpdate: (v: string) => mixed);
    (props.onUpdate: (v: SyntheticEvent<any>) => mixed);
    (props.onBlur: (v: string) => mixed);
    (props.onBlur: (v: SyntheticEvent<any>) => mixed);
    // $ExpectError
    (props.onChange: (v: number) => mixed);
    // $ExpectError
    (props.onUpdate: (v: number) => void);
    // $ExpectError
    (props.onBlur: (v: number) => void);

    (props.onDragStart: Function);
    (props.onDrop: Function);
    (props.onFocus: Function);
    // $ExpectError
    (props.onDragStart: void);
    // $ExpectError
    (props.onDrop: void);
    // $ExpectError
    (props.onFocus: void);
    return (
        <input {...props}/>
    )
}

const form = (): React$Element<any> => (
  <form name="name">
    <input name="foobar" />
  </form>
);

const connected: React.ComponentType<*> = reduxForm({
  form: 'name',
  fields: ['foobar']
})(form);

// $ExpectError
reduxForm({})(React.Component);

// $ExpectError
reducer({}, null)
