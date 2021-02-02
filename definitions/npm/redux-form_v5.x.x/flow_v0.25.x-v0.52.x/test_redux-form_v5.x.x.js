/** @flow */
import { reduxForm, reducer } from 'redux-form';
import type { InputProps } from 'redux-form';
import React from 'react';
const Input = (props: InputProps) => {
    (props.onChange: (v: string) => mixed);
    (props.onChange: (v: SyntheticEvent) => mixed);
    (props.onUpdate: (v: string) => mixed);
    (props.onUpdate: (v: SyntheticEvent) => mixed);
    (props.onBlur: (v: string) => mixed);
    (props.onBlur: (v: SyntheticEvent) => mixed);
    // $FlowExpectedError
    (props.onChange: (v: number) => mixed);
    // $FlowExpectedError
    (props.onUpdate: (v: number) => void);
    // $FlowExpectedError
    (props.onBlur: (v: number) => void);

    (props.onDragStart: Function);
    (props.onDrop: Function);
    (props.onFocus: Function);
    // $FlowExpectedError
    (props.onDragStart: void);
    // $FlowExpectedError
    (props.onDrop: void);
    // $FlowExpectedError
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

const connected: typeof React.Component = reduxForm({
  form: 'name',
  fields: ['foobar']
})(form);

// $FlowExpectedError
reduxForm({})(React.Component);

// $FlowExpectedError
reducer({}, null)
