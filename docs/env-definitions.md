# Environment Definitions

Flow is a static analysis tool that exposes a range of global definitions to help you type your application. But flow only supports for the most part, two types of environments, node and browser and sometimes you want something a little extra that flow just doesn't support and isn't quite right to have flow support as a core system.

That's where env definitions from flow-typed come into play, a home for all those global definitions to share and reuse and standardize for specific environments.

To make it more concrete, lets take a look at some examples of when you might want to create to leverage a core definition.

### jsx

Flow is built by Meta and ships with react definitions it does not type or provide a list of available jsx properties. These can live as an env definition instead.

```
type Props = {|
  ...jsx$HTMLElementProps,
  foo: string,
|};

const Input = ({
  foo,
  ...otherProps
}: Props) => {
  return (
    <input {...otherProps} />
  );
};
```

### node

Although flow ships with both node and browser library definitions there is no mode to distinguish between the two. Sometimes this can cause conflict if there are api's that have the same name but drastically different type definitions depending on which environment it's used in. An env definition could solve this as it's loaded after the built-in's and could override functionality of a declared var.

---

These are just a couple examples but env definitions could serve a range of purposes for just about anything that isn't related to npm packages.

The rules of creating an env definition are also quite similar to npm library definitions in that they support flow version ranges but differ in that they do not declare any modules nor have package versions.
