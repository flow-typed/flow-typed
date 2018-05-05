// @flow

import * as React from "react";
import { Formik, Form, Field } from "formik";
import type {
  FieldProps,
  FormikErrors,
  FormikTouched,
  FormikActions,
  FormikProps
} from "formik";
import { describe, it } from "flow-typed-test";

const i18n = { loadNamespaces: () => {} };

type Values = {
  text: string
};

describe("formik", () => {
  describe("<Formik />", () => {
    it("passes when used properly", () => {
      <Formik
        initialValues={{ text: "text" }}
        validate={(values: Values) => {
          const errors = {};
          if (!values.text) {
            errors.text = "Text Required";
          }
          return errors;
        }}
        onSubmit={(values: Values) => {}}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }: FormikProps<Values>) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                onChange={(e: SyntheticInputEvent<>) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                value={values.text}
              />
              {touched.text && errors.text && <div>{errors.text}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      />;
    });

    it("raises error when trying to access values not in Values", () => {
      <Formik
        initialValues={{ text: "text" }}
        validate={(values: Values) => {
          const errors = {};
          if (!values.text) {
            errors.text = "Text Required";
          }
          return errors;
        }}
        onSubmit={(values: Values) => {}}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }: FormikProps<Values>) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                // $ExpectError - email missing in values
                value={values.email}
              />
              {/* $ExpectError - touched missing in values */}
              {touched.email && errors.email && <div>{errors.email}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      />;
    });
  });

  describe("<Form /> and <Field />", () => {
    it("passes when used properly", () => {
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
    });
  });
});
