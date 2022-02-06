An alternative JS core library definition for ES5.1

The Flow core library definitions cover the latest ES versions. That has a lot of additional methods and classes compared to ES5 and so code-completion and type checking do not give errors about using those new methods and classes. Use this core library definition to write pure ES5.1 Javascript without having to add pollyfills or compile down to ES5 via Babel.

Requires the `no_flowlib` option.

Based off Typescript's es5 definition and adjusted towards Flow's core libdef.

If Flow provided a way to specify which ES the code was targeting then this should be part of Flow core.
