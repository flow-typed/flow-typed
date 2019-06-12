# @material-ui/core@4.x.x

Created by [@retyui](https://github.com/retyui)

---

## Additional declared modules

### Common types

- `@material-ui/core/flow-types` - This module include all common types

### Abstraction

- `@material-ui/core/@@dom` - This module contains types for `DOM Elements`.

For example, if you need more strict types for props of `input` based components,
you can describe them in a `HTMLImageAttributes` type and all components inherit your changes.

### Third-party modules

The following modules are used as an abstraction
to resolve a problem with [dependencies between library definitions](https://github.com/flow-typed/flow-typed/issues/1857).

I copied only the necessary parts of the types.

For example, to describe the component `<Box/>` I need several types from `csstype`

- `@material-ui/core/@@csstype` => `csstype`
- `@material-ui/core/@@utils` => `@material-ui/core/utils`
- `@material-ui/core/@@JSS` => `jss`
- `@material-ui/core/@@react-transition-group` => `react-transition-group`

---

# Known issues

## №1 OverridableComponents

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

## №2 Duplicate export

How we can see in example next flow.js [restricts the use of imports](https://github.com/facebook/flow/issues/7810)

```js
declare module 'module/scope/element'{
	declare export default () => number;
}

declare module 'module/scope'{
	declare export {default as element} from 'module/scope/element';
}

declare module 'module'{
	declare export {element} from 'module/scope'; // Error: Duplicate export for `element`
}
```

## №3 Function is Object

The flow [cannot distinguish](https://github.com/facebook/flow/issues/7831) the function from the object

```js
type Obj = { [string]: {} };

const test: Obj = () => {}; // no any error
```

