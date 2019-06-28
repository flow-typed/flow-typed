# Problems with `yup` definitions

## 1) Mutation by [addMethod()](https://github.com/jquense/yup/#yupaddmethodschematype-schema-name-string-method--schema-void)

## 2) `object()` magic methods:

Object include some methods witch difficult to type,
for resolve this problem I recommend you call these methods with
new schema type!

### 2.1) [object().camelCase()](https://github.com/jquense/yup/#objectcamelcase-schema)

```js
object({ a_aa_a: string() }).camelCase<{ aAaA: string }>()
```

### 2.2) [object().constantCase()](https://github.com/jquense/yup/#objectconstantcase-schema)

```js
object({ a_aa_a: string() }).constantCase<{ A_AA_A: string }>()
```

### 2.3) [object().from('from','to', false)](https://github.com/jquense/yup/#objectfromfromkey-string-tokey-string-alias-boolean--false-schema)

```js
object({ a: string() }).from<{ a2: string }>('a', 'a2');
```

## 3) `ref<T>('key')` not throw error

Example with mistake:

```js
const schema = object({
  a: object({
    b: number(),
  }),
  refB: ref<boolean>('a.b'), // here must be `number`
});

(schema: Schema<{ a: { b: number }, refB: boolean }, any>);
```

In example above I called `ref` with `boolean` type, 
but it is wrong, because `a.b` declared as `number`

!! You should be very carefully when you change something 

