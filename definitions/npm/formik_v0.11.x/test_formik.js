// @flow

import * as React from "react";
import { Formik, Form, Field } from "formik";
import type { FieldProps, FormikActions, FormikProps } from "formik";
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
        onSubmit={(
          values: Values,
          { setSubmitting, setFieldError }: FormikActions<Values>
        ) => {
          setFieldError("text", "Text is Required!");
          setSubmitting(false);
        }}
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

  describe("FormikActions", () => {
    describe("setStatus", () => {
      it("passes when using setStatus properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setStatus("done");
        };
      });

      it("raises error when passed more than one argument", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError setStatus action expects only one argument
          actions.setStatus("text", "done");
        };
      });
    });

    describe("setErrors", () => {
      it("passes when using setErrors properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setErrors({ text: "Text is required" });
        };
      });

      it("raises error when passed an unrecognized value key", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError setErrors keys must match value fields
          actions.setErrors({ other: "Text is required" });
        };
      });
    });

    describe("setSubmitting", () => {
      it("passes when using setSubmitting properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setSubmitting(false);
        };
      });

      it("raises error when passed a non-boolean", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError setSubmitting only takes a boolean
          actions.setSubmitting("false");
        };
      });
    });

    describe("setTouched", () => {
      it("passes when using setTouched properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setTouched({
            text: true
          });
        };
      });

      it("raises error when passed an unrecognized field or a non-boolean", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError setTouched keys must match value fields
          actions.setTouched({ other: true });
          // $ExpectError setTouched value must be a boolean
          actions.setTouched({ text: "true" });
        };
      });
    });

    describe("setValues", () => {
      it("passes when using setValues properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setValues({
            text: "Text"
          });
        };
      });

      it("raises error when passed something other than Values", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError setValues keys must match value fields
          actions.setValues({ other: "Text" });
        };
      });
    });

    describe("setFieldValue", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldValue("text", "Value");
          actions.setFieldValue("text", "Value", true);
          actions.setFieldValue("other", "Value");
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError Field and value arguments expected
          actions.setFieldValue({ text: "Text" });
        };
      });
    });

    describe("setFieldError", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldError("text", "Error");
          actions.setFieldError("other", "Error");
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError Field and value arguments expected
          actions.setFieldError("Error");
        };
      });
    });

    describe("setFieldTouched", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldTouched("text", true);
          actions.setFieldTouched("other", true);
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError Field and value arguments expected
          actions.setFieldTouched(true);
        };
      });
    });

    describe("validateForm", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.validateForm();
          actions.validateForm({ text: "Text" });
        };
      });
    });

    describe("resetForm", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.resetForm();
          actions.resetForm({ text: "Text" });
        };
      });

      it("raises error if pass multiple arguments", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError resetForm expects 0 or 1 arguments
          actions.resetForm("text", "Text");
        };
      });
    });

    describe("submitForm", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.submitForm();
        };
      });

      it("raises error if passed an argument", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError submitForm expects no arguments
          actions.submitForm({ text: "Text" });
        };
      });
    });

    describe("setFormikState", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFormikState(({ values }) => ({
            values: { text: `#${values.text}` }
          }));
          actions.setFormikState(
            ({ errors }) => ({
              errors: { ...errors, text: "Text is required" }
            }),
            () => {}
          );
        };
      });

      it("raises error if return state shape other than FormikState<Values>", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $ExpectError - must return correct state shape
          actions.setFormikState(({ values }) => ({
            text: `#${values.text}`
          }));
        };
      });
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
