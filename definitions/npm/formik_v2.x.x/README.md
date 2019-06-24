## Example how to use HOC `withFormik(config)(FormComponent)`

```js
// @flow
import React from 'react';
import { withFormik, type InjectedFormikProps } from 'formik';

type Values = {
  name: string,
  age: number,
};

type Props = {
  createUser: Values => Promise<void>,
  initialName: string,
  initialAge: number,
  submitButtonText: string,
};

const Form = (props: InjectedFormikProps<Props, Values>) => {
  const { handleSubmit, submitButtonText, values } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="age" value={values['age']} />
      <input type="text" name="name" value={values['name']} />

      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

const WithFormikForm = withFormik<Props, Values>({
  handleSubmit(values, { props, setSubmitting }) {
    props.createUser(values).finally(() => setSubmitting(false));
  },
  mapPropsToValues: ({ initialAge, initialName }) => ({
    age: initialAge,
    name: initialName,
  }),
})(Form);

export const App = () => (
  <WithFormikForm
    createUser={(val: Values) => Promise.resolve()}
    initialName={''}
    initialAge={16}
    submitButtonText={'Edit user'}
  />
);

```
