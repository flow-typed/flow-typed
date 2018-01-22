// Derived from TS typings at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/icepick
import i from 'icepick';

// freeze(collection)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    const newColl: typeof coll = i.freeze(coll);
}

// thaw(collection)
class Foo {}

{
    const coll = i.freeze({ a: 'foo', b: [1, 2, 3], c: { d: 'bar' }, e: new Foo() });
    const newColl: typeof coll = i.thaw(coll);
}

// assoc(collection, key, value)
{
    const coll = { a: 1, b: 2 };
    const newColl: typeof coll = i.assoc(coll, 'b', 3); // {a: 1, b: 3}
    const arr = ['a', 'b', 'c'];
    const newArr: typeof arr = i.assoc(arr, 2, 'd'); // ["a", "b", "d"]

    // $ExpectError
    i.assoc(coll, ['b'], 1);

    // $ExpectError
    i.assoc(arr, [2], 'd');
}

// alias: set(collection, key, value)
{
    const coll = { a: 1, b: 2 };
    i.set(coll, 'b', 3); // {a: 1, b: 3}
    const arr = ['a', 'b', 'c'];
    i.set(arr, 2, 'd'); // ["a", "b", "d"]

    // $ExpectError
    i.set(coll, ['b'], 4);
    
    // $ExpectError
    i.set(arr, [2], 'd');
}

// dissoc(collection, key)
{
    const coll = { a: 1, b: 2, c: 3 };
    const newColl: typeof coll = i.dissoc(coll, 'b'); // {a: 1, c: 3}
    const arr = ['a', 'b', 'c'];
    const newArr: typeof arr = i.dissoc(arr, 2); // ["a", , "c"]

    // $ExpectError
    i.dissoc(coll, ['b']);
    
    // $ExpectError
    i.dissoc(arr, [2]);
}

// alias: unset(collection, key)
{
    const coll = { a: 1, b: 2, c: 3 };
    const newColl: typeof coll = i.unset(coll, 'b'); // {a: 1, c: 3}
    const arr = ['a', 'b', 'c'];
    const newArr: typeof arr = i.unset(arr, 2); // ["a", , "c"]

    // $ExpectError
    i.unset(coll, ['b']);
    
    // $ExpectError
    i.unset(arr, [2]);
}

// assocIn(collection, path, value)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    const newColl: typeof coll = i.assocIn(coll, ['c', 'd'], 'baz');

    const coll2 = {};
    const newColl2: typeof coll2 = i.assocIn(coll2, ['a', 'b', 'c'], 1);

    // $ExpectError
    i.assocIn(coll, 'b', 'baz');
    
    // $ExpectError
    i.assocIn(coll2, 1, 1);
}

// alias: setIn(collection, path, value)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    const newColl: typeof coll = i.setIn(coll, ['c', 'd'], 'baz');

    const coll2 = {};
    const newColl2: typeof coll2 = i.setIn(coll2, ['a', 'b', 'c'], 1);

    // $ExpectError
    i.setIn(coll, 'b', 'baz');
    
    // $ExpectError
    i.setIn(coll2, 1, 1);
}

// getIn(collection, path)
{
    const coll = i.freeze([{ a: 1 }, { b: 2 }]);

    const newColl: typeof coll = i.getIn(coll, [1, 'b']); // 2

    // $ExpectError
    i.getIn(coll, 'b');

    // $ExpectError
    i.getIn(coll, 1);

    // $ExpectError
    i.getIn(coll, [true]);
}

// updateIn(collection, path, callback)
{
    const coll = i.freeze([{ a: 1 }, { b: 2 }]);

    const doubleVal = (val: number) => val * 2;
    const newColl: typeof coll = i.updateIn(coll, [1, 'b'], doubleVal); // [ {a: 1}, {b: 4} ]

    // $ExpectError
    i.updateIn(coll, 'b', doubleVal);
    
    // $ExpectError
    i.updateIn(coll, 1, doubleVal);

    // $ExpectError
    i.updateIn(coll, [true], doubleVal);
}

// assign(coll1, coll2, ...)
{
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 4, d: 5 };
    const newObj: (typeof obj1 & typeof obj2) = i.assign(obj1, obj2); // {a: 1, b: 2, c: 4, d: 5}
}

// merge(target, source)
{
    const defaults = { a: 1, c: { d: 1, e: [1, 2, 3], f: { g: 1 } } };

    const obj = { c: { d: 2, e: [2], f: null } };
    const result1: (typeof defaults & typeof obj) = i.merge(defaults, obj); // {a: 1, c: {d: 2, e: [2]}, f: null}

    const obj2 = { c: { d: 2 } };
    const result2: (typeof defaults & typeof obj2) = i.merge(result1, obj2);

    result1 === result2; // true

    const obj3 = { c: { d: 2 } };
    const result3: (typeof defaults & typeof obj3) = i.merge(result1, obj3, function(target, source, key) {
        return target;
    });
}

// arrays
{
    const a = [1];
    const result1: typeof a = i.push(a, 2); // [1, 2];
    const result2: typeof a = i.unshift(a, 0); // [0, 1, 2];
    const result3: typeof a = i.pop(a); // [0, 1];
    const result4: typeof a = i.shift(a); // [1];
}

{
    const coll = i.map(v => v * 2, [1, 2, 3]); // [2, 4, 6]
    const removeEvens = (arr: number[]) => arr.filter(v => v % 2);

    const result: typeof coll = removeEvens([1, 2, 3]); // [1, 3]
}

// chain(coll) - not defined
{
    const coll = {
        a: [1, 2, 3],
        b: { c: 1 },
        d: 4,
    };

    const newColl: typeof coll = i
        .chain(coll)
        .assocIn(['a', 2], 4)
        .setIn(['a', 1], 5)
        .updateIn(['d'], d => d * 2)
        .merge({ b: { c: 2, c2: 3 } })
        .assoc('e', 2)
        .set('f', 3)
        .dissoc('d')
        .getIn(['a', 0])
        .value();
}
