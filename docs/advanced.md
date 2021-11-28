# Advanced configuration

Congrats on getting `flow-typed` set up! There are a small number of configuration options available through the CLI, but using all those flags can be tiring. This tiny guide will walk through setting up custom scripts in `package.json`.

## Custom Scripts

Before editing your `package.json`, take a look at the available [[CLI Commands & Flags|CLI-Commands-and-Flags]]. Create an entry for each command you'd like to customize.

```
"scripts": {
  "flow-typed-install": "flow-typed install -s -o --ignoreDef peer bundle --libdefDir custom/def_folder/"
  "flow-typed-createstub": "flow-typed create-stub -o --libdefDir custom/def_folder/"
},
```

And done! Now, instead of using `flow-typed install`, use `npm run flow-typed-install`, and your customizations will be applied every time.

### `.flowconfig`

There is currently no way to customize `flow-typed` through flow's `.flowconfig` file.
