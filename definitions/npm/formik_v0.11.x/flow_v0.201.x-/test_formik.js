// @flow

import * as React from "react";
import { Formik, Form, Field } from "formik";
import type { FieldProps, FormikActions, FormikProps } from "formik";
import { describe, it } from "flow-typed-test";

const i18n = { loadNamespaces: () => {} };

type Values = {
  text: string,
  ...
};

describe("formik", () => {
  describe("<Formik />", () => {
    it("passes when used properly", () => {
      <Formik
        initialValues={{ text: "text" }}
        validate={(values) => {
          const errors = {};
          if (!values.text) {
            errors.text = "Text Required";
          }
          return errors;
        }}
        onSubmit={(
          values,
          { setSubmitting, setFieldError }
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
        }) => {
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
        validate={(values) => {
          const errors = {};
          if (!values.text) {
            errors.text = "Text Required";
          }
          return errors;
        }}
        onSubmit={(values) => {}}
        render={({
          // $FlowExpectedError[incompatible-use]
          values,
          // $FlowExpectedError[incompatible-use]
          errors,
          // $FlowExpectedError[incompatible-use]
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      />;
    });

    it("raises error when trying to update fields with values of the wrong type", () => {
      <Formik
        initialValues={{ text: "text" }}
        onSubmit={(values) => {}}
        render={({
          values,
          // $FlowExpectedError[incompatible-use]
          setFieldValue,
        }) => {
          return (
            <form>
              <button onClick={() => {
                setFieldValue("text", "new value")
                setFieldValue("text", 3)
              }}>
                Submit
              </button>
            </form>
          );
        }}
      />;
    });
  });

  it("respects the user specifying more specific initialValues", () => {
      type FormValues = {
        requestState: "loading" | "ready",
        ...
      }
      const initialValues: FormValues = {requestState: "loading"}
      const rendered = <Formik
        initialValues={initialValues}
        onSubmit={values => {}}
        render={({
          // $FlowExpectedError[incompatible-use]
          setFieldValue,
        }) => {
          return (
            <form>
              <button onClick={() => {
                setFieldValue("requestState", "ready")
                setFieldValue("requestState", "asfuohasfuoh")
              }}>
                Submit
              </button>
            </form>
          );
        }}
      />;
  })

  describe("FormikActions", () => {
    describe("setStatus", () => {
      it("passes when using setStatus properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setStatus("done");
        };
      });

      it("raises error when passed more than one argument", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $FlowExpectedError[extra-arg] - no more than 1 argument is expected
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
          // $FlowExpectedError[prop-missing] setErrors keys must match value fields
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
          // $FlowExpectedError[incompatible-call] setSubmitting only takes a boolean
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
          // $FlowExpectedError[prop-missing] - property `other` is missing in `Values`
          actions.setTouched({ other: true });
           // $FlowExpectedError[incompatible-call] - string is incompatible with boolean
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
          // $FlowExpectedError[prop-missing] - property `text` is missing in object
          actions.setValues({ other: "Text" });
        };
      });
    });

    describe("setFieldValue", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldValue("text", "Value");
          actions.setFieldValue("text", "Value", true);
          // $FlowExpectedError[prop-missing] - property `other` is missing in `Values` 
          actions.setFieldValue("other", "Value");
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $FlowExpectedError[incompatible-call] - object literal is incompatible with key set
          actions.setFieldValue<$Keys<Values>>({ text: "Text" });
        };
      });
    });

    describe("setFieldError", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldError("text", "Error");
           // $FlowExpectedError[prop-missing] - property `other` is missing in `Values`
          actions.setFieldError("other", "Error");
        };
      });

      it("raises error when field does not exist", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $FlowExpectedError[prop-missing] - property `Error` is missing in `Values`
          actions.setFieldError("Error",'');
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $FlowExpectedError[incompatible-call] - function requires another argument
          actions.setFieldError("text");
        };
      });
    });

    describe("setFieldTouched", () => {
      it("passes when used properly", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          actions.setFieldTouched("text", true);
          // $FlowExpectedError[prop-missing] - 'other' is not a key in values
          actions.setFieldTouched("other", true);
        };
      });

      it("raises error when not passed a field", () => {
        const testFunc = (actions: FormikActions<Values>) => {
          // $FlowExpectedError[incompatible-call] - Field and value arguments expected
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
          // $FlowExpectedError[extra-arg] - resetForm expects 0 or 1 arguments
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
          // $FlowExpectedError[extra-arg] - submitForm expects no arguments
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
          // $FlowExpectedError[prop-missing] - must return correct state shape
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
