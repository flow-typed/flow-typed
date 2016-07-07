import mapObj from 'map-obj';

const newObject: Object = mapObj({ foo: 'bar' }, function(key: string, value: any, object: Object) {
  // first element is the new key and second is the new value
  // here we reverse the order
  return [value, key];
});
