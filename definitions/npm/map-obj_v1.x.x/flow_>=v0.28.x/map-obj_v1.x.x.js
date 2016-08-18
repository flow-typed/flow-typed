declare module 'map-obj' {
  declare module.exports: <
    TInputValue,
    TOutputValue,
    TInputKey: string,
    TOutputKey: string,
    TObject: { [key: TInputKey]: TInputValue }
  >(
    object: TObject,
    iteratee: (
      key: TInputKey,
      value: TInputValue,
      object: TObject
    ) => [TOutputKey, TOutputValue]
  ) => { [key: TOutputKey]: TOutputValue };
}
