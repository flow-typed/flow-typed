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

// $ExpectError - missing prop
el = (<Form />);
// $ExpectError - unknown prop
el = (<Form namee="test" />);
// $ExpectError - invalid prop
el = (<Form name="test" persistent="1337" />);
// $ExpectError - invalid prop
el = (<Form name="test" onSubmit="1337" />);
// $ExpectError - invalid prop
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

// $ExpectError - missing prop
el = (<Field />);
// $ExpectError - unknown prop
el = (<Field namee="test" />);
// $ExpectError - invalid prop
el = (<Field name="test" validate="bur" />);
// $ExpectError - invalid prop
el = (<Field name="test" normalize="bur" />);

/* ============== */
/* = FieldArray = */
/* ============== */

el = (<FieldArray name="test" />);

// $ExpectError - missing prop
el = (<FieldArray />);
// $ExpectError - unknown prop
el = (<FieldArray namee="test" />);
