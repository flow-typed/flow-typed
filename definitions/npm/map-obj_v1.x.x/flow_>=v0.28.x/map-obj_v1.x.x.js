declare module 'map-obj' {
  declare module.exports: <
    TInputValue,
    TOutputValue,
    TObject: { [key: string]: TInputValue }
  >(
    object: TObject,
    iteratee: (
      key: string,
      value: TInputValue,
      object: TObject
    ) => [string|number, TOutputValue]
  ) => { [key: string]: TOutputValue };
}
