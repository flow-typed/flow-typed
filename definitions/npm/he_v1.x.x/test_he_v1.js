import he from 'he';

he.encode('foo');
he.encode('foo', {});
he.encode('foo', {
  useNamedReferences: true,
  decimal: true,
  encodeEverything: true,
  strict: true,
  allowUnsafeSymbols: true,
});
// $FlowExpectedError
he.encode();

he.decode('foo');
he.decode('foo', {});
he.decode('foo', {
  strict: true,
  isAttributeValue: true,
});
// $FlowExpectedError
he.decode(null);

he.escape('foo');
// $FlowExpectedError
he.escape();

he.unescape('foo');
he.unescape('foo', {});
he.unescape('foo', {
  useNamedReferences: true,
  decimal: true,
  encodeEverything: true,
  strict: true,
  allowUnsafeSymbols: true,
});
// $FlowExpectedError
he.unescape()
