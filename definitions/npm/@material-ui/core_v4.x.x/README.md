# @material-ui/core@4.x.x

Created by [@retyui](https://github.com/retyui)

Some times you can find strange module declaration that looks like `<path_scope>/@@<name>`

This is a temporary abstraction for importing external dependencies.

#№ Known issues

### 1) OverridableComponents

I [don't know](https://github.com/facebook/flow/issues/7701) how to infer type dynamically based by `component` prop:

```js
import { Button } from '@material-ui/core';

type MyButtonProps = {
  abcd: string,
};

const MyButton = (props: MyButtonProps) => <i />;

<Button
  component={MyButton}
  abcd={1} // need error
/>;
```
