# flow-typed.config.json

Since version `>=3.8.0`, flow-typed supports a config file to help you set various project level settings.

`<PROJECT_ROOT>/flow-typed.config.json`

## env

`env` accepts an array of strings that map to environment definitions that you can you can find [here](https://github.com/flow-typed/flow-typed/tree/main/definitions/environments).

```json
{
  env: ["jsx", "node"],
}
```

Learn more about [environment definitions](env-definitions.md)

## ignore

When you have a dependencies you don't want updated or swapped out during the `install` command you can add this property which takes an array of strings referencing either package scopes or package names explicitly to ignore.

```json
{
  ignore: ["@babel", "@custom/", "eslint", "eslint-plugin-ft-flow"]
}
```
