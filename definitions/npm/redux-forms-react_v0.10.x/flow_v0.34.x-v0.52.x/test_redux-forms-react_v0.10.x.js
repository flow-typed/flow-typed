/* @flow */
import React from 'react';
import { Form, Field, FieldArray } from 'redux-forms-react';

let el;

/* ======== */
/* = Form = */
/* ======== */

el = (
  <Form name="test" />
);

let f: HTMLFormElement;
el = (
  <Form
    name="test"
    persistent
    onSubmit={(values) => new Promise((resolve, reject) => { resolve(values) })}
    withRef={(form) => { f = form; }}
  />
);

// $FlowExpectedError - missing prop
el = (<Form />);
// $FlowExpectedError - unknown prop
el = (<Form namee="test" />);
// $FlowExpectedError - invalid prop
el = (<Form name="test" persistent="1337" />);
// $FlowExpectedError - invalid prop
el = (<Form name="test" onSubmit="1337" />);
// $FlowExpectedError - invalid prop
el = (<Form name="test" withRef="1337" />);

/* ========= */
/* = Field = */
/* ========= */

el = (
  <Field name="test" />
);

el = (
  <Field
    name="test"
    validate={value => Boolean(value) ? null : 'error'}
    normalize={value => value.substring(5)}
    defaultValue="kek"
  />
);

// $FlowExpectedError - missing prop
el = (<Field />);
// $FlowExpectedError - unknown prop
el = (<Field namee="test" />);
// $FlowExpectedError - invalid prop
el = (<Field name="test" validate="bur" />);
// $FlowExpectedError - invalid prop
el = (<Field name="test" normalize="bur" />);

/* ============== */
/* = FieldArray = */
/* ============== */

el = (<FieldArray name="test" />);

// $FlowExpectedError - missing prop
el = (<FieldArray />);
// $FlowExpectedError - unknown prop
el = (<FieldArray namee="test" />);
