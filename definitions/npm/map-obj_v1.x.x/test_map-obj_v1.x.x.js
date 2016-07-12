import mapObj from 'map-obj';

const newObject: Object = mapObj({ foo: 'bar' }, function(key: string, value: any, object: Object) {
  // first element is the new key and second is the new value
  // here we reverse the order
  return [value, key];
});

// $ExpectError
mapObj({a: 1}, (key, value, obj) => { obj.b; });

// $ExpectError
mapObj({a: 1}, (key, value, obj) => { obj.a = 'asdf'; });

// $ExpectError
(mapObj({a: 1}, (key, value, obj) => {
  return {b: 'asdf'};
}): {[key: string]: number});
