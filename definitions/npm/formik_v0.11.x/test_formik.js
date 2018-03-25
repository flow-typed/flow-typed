// @flow
import * as React from "react";
import {
  Formik,
  Form,
  Field,
  type FieldProps,
  type FormikActions,
  type FormikConfig
} from "formik";

<Formik
  initialValues={{ foo: "hi" }}
  onSubmit={(values: *, formikActions: FormikActions<*>) => {
    values.foo;
    values.bar;
  }}
/>;

const config1: FormikConfig = {
  onSubmit: (values: *, formikActions: FormikActions<*>) => {}
};
// $ExpectError
const configRequiresOnSubmit: FormikConfig = {
  onSubmit: null
};

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
