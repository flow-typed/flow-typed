# flow-typed.config.json

Since version `>=3.8.0`, flow-typed supports a config file to help you set various project level settings.

**To get started, create a config file at the root of your project, generally as a sibling to `.flowconfig`**

`<PROJECT_ROOT>/flow-typed.config.json`

## Properties

### env

`env` accepts an array of strings that map to environment definitions that you can you can find [here](https://github.com/flow-typed/flow-typed/tree/main/definitions/environments).

```json
{
  env: ["jsx", "node"],
}
```

Learn more about [environment definitions](env-definitions.md)

### ignore

When you have a dependencies you don't want updated or swapped out during the `install` command you can add this property which takes an array of strings referencing either package scopes or package names explicitly to ignore.

```json
{
  ignore: ["@babel", "@custom/", "eslint", "eslint-plugin-ft-flow"]
}
```

### workspaces

Flow-typed works out of the box with yarn or npm workspaces to install sub project dependencies. But if your monorepo uses neither you can still let flow-typed know where to pull dependencies to search for definitions from with the `workspaces` key which follows the same glob format as yarn or npm.

```json
{
  workspaces: ["web", "packages/*"]
}
```
