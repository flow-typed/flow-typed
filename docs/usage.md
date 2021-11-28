# Importing Type Definitions

This guide assumes you've followed the installation steps in the [Quick start guide](quickstart.md), and that you've installed the the definitions for your project's dependencies.

## Existing Definitions

> Using the `/flow-typed` directory for `libdefs` is a convention that enables Flow to JustWork™ out of the box and encourages consistency across projects that use Flow, but it is also possible to explicitly configure Flow to look elsewhere for `libdefs` using the `[libs]` section of your `.flowconfig`.[ [1] ](https://flow.org/en/docs/libdefs/)_

Once you've installed the definitions (via `flow-typed install`), you can start using them right away. For instance, if you're using `underscore` methods, simply import the underscore library:

```
import _ from 'underscore';

let minimum: number = _.min([1, 3, 4, 2]);
```

If the definition includes type declarations, you can import them with `import type`:

```
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form'; 
```

## Manual/Custom Definitions

> The flow docs has a great a page on [Creating Library Definitions](https://flow.org/en/docs/libdefs/creation/).

If you're unable to find a definition using `flow-typed`, you can simply create it yourself. Start by creating a folder called `custom-definitions` at the root of your project, and adding it to the `[libs]` section of the `.flowconfig` file.

```
[libs]
./custom-definitions/
```

Define your custom modules by adding them to the folder; in our case, a definitions for `awesome-library` would exist in `./custom-definitions/awesome-library.js`. 

```
declare module 'awesome-library' {
  declare type AwesomeType = {
    name: string,
    reason: string,
    is_awesome: boolean
  }
  declare function makeAwesome(name: string): AwesomeType;
}
```

In the file where you wish to use `awesome-library`, import both it and the type definition.

```
import Awesome from 'awesome-library';
import type { AwesomeType } from 'awesome-library';
```

And you're done! You can now use the type checked version of `makeAwesome`, and type check the return value.

```
let awesomeThing: AwesomeType = Awesome.makeAwesome('thing');
```

<sub>This page was created to clarify issue [#438](https://github.com/flowtype/flow-typed/issues/438).</sub>
