## Example how to use HOC `withFormik(config)(FormComponent)`

```js
import React from 'react';
import { withFormik, type InjectedFormikProps } from 'formik';

type FormValues = {
  name: string,
  age: number,
};

type FormProps = {
  createUser: FormValues => Promise<mixed>,
  initialName: string,
  initialAge: number,
  submitButtonText: string,
};

type Props = InjectedFormikProps<FormProps, FormValues>;

const Form = (props: Props) => {
  const { handleSubmit, submitButtonText, values } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="age" value={values['age']} />
      <input type="text" name="name" value={values['name']} />

      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

const config = {
  handleSubmit(values, { props, setSubmitting }) {
    props.createUser(values).finally(() => setSubmitting(false));
  },
  mapPropsToValues: ({ initialAge, initialName }) => ({
    age: initialAge,
    name: initialName,
  }),
};

const WithFormikForm = withFormik<FormProps, FormValues>(config)(Form);

export const App = () => (
  <WithFormikForm
    createUser={(val: FormValues) => Promise.resolve(true)}
    initialName={''}
    initialAge={16}
    submitButtonText={'Edit user'}
  />
);
```
