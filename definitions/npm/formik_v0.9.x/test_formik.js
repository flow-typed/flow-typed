// @flow

import * as React from "react";
import { Formik, Form, Field, type FieldProps } from "formik";

<Formik
  initialValues={{ foo: "hi" }}
  onSubmit={(values, formikActions) => {
    values.foo;
    values.bar;
  }}
/>;

const CustomInputComponent = (props: FieldProps) => <input />;

<Form>
  <Field type="email" name="email" placeholder="Email" />
  <Field component="select" name="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </Field>
  <Field component={CustomInputComponent} name="firstName" />
</Form>;
