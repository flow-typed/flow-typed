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
// $ExpectError
he.encode();

he.decode('foo');
he.decode('foo', {});
he.decode('foo', {
  strict: true,
  isAttributeValue: true,
});
// $ExpectError
he.decode(null);

he.escape('foo');
// $ExpectError
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
// $ExpectError
he.unescape()
