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

// chain(coll) with array and objects
{
    const arr = [1, 2, {foo: 'bar'}];
    const obj = {foo: 'f', bar: { foo: 'f', bar: 'b' }};

    // ensure correct types given to chain
    {
        const result1: any[] = i.chain([]).value();
        const result2: Object = i.chain({}).value();
        const result3: Function = i.chain(function() { return; }).value();
        const result4: Symbol = i.chain(Symbol('foo')).value();

        // $ExpectError
        i.chain(1).value();
        // $ExpectError
        i.chain(true).value();
        // $ExpectError
        i.chain('test').value();

        // Functions and Symbols should be treated as Objects
        // $ExpectError
        i.chain(function() { return; }).push(5).value();
        // $ExpectError
        i.chain(Symbol('foo')).push(5).value();
    }

    // chain assoc
    {
        const coll: typeof arr = i.chain(arr).assoc(0, 5).value(); // [5, 2, {foo: 'bar'}]
        const coll2: typeof obj = i.chain(obj).assoc(0, 5).value(); // {"0": 5, foo: 'f', bar...}
        // $ExpectError
        i.chain(arr).assoc('key', 5).value();
    }

    // chain set
    {
        const coll: typeof arr = i.chain(arr).set(0, 5).value(); // [5, 2, {foo: 'bar'}]
        const coll2: typeof obj = i.chain(obj).set(0, 5).value(); // {"0": 5, foo: 'f', bar...}
        // $ExpectError
        i.chain(arr).set('key', 5).value();
    }

    // chain dissoc
    {
        const coll: typeof arr = i.chain(arr).dissoc(0).value(); // [2, {foo: 'bar'}]
        const coll2: typeof obj = i.chain(obj).dissoc(0).value();
        // $ExpectError
        i.chain(arr).dissoc('key').value();
    }

    // chain unset
    {
        const coll1: typeof arr = i.chain(arr).unset(0).value(); // [null, 2, {foo: 'bar'}]
        const coll2: typeof obj = i.chain(obj).unset(0).value();
        // $ExpectError
        i.chain(arr).unset('key').value();
    }

    // chain thru
    {
        const coll: typeof arr = i.chain(arr).thru(function(val) { return val; }).value();
        const coll2: typeof obj = i.chain(obj).thru(function(val) { return val; }).value();
        // $ExpectError
        i.chain(arr).thru(function(val) { return 5; }).value();
    }

    // chain push
    {
        const coll: typeof arr = i.chain(arr).push({key: 'value'}).value();
        // $ExpectError
        i.chain(obj).push({key: 'value'}).value();
    }

    // chain pop
    {
        const coll: typeof arr = i.chain(arr).pop().value();
        // $ExpectError
        i.chain(obj).pop().value();
    }

    // chain shift
    {
        const coll: typeof arr = i.chain(arr).shift().value();
        // $ExpectError
        i.chain(obj).shift().value();
    }

    // chain unshift
    {
        const coll: typeof arr = i.chain(arr).unshift(0).value();
        // $ExpectError
        i.chain(obj).unshift(0).value();
    }

    // chain reverse
    {
        const coll: typeof arr = i.chain(arr).reverse().value();
        // $ExpectError
        i.chain(obj).reverse().value();
    }

    // chain sort
    {
        const coll: typeof arr = i.chain(arr).sort().value();
        // $ExpectError
        i.chain(obj).sort().value();
    }

    // chain splice
    {
        const coll: typeof arr = i.chain(arr).splice(1, 0).value();
        // $ExpectError
        i.chain(obj).splice(1, 0).value();
    }

    // chain slice
    {
        const coll: typeof arr = i.chain(arr).slice(0, 1).value();
        // $ExpectError
        i.chain(obj).slice(0, 1).value();
    }

    // chain map
    {
        const coll: typeof arr = i.chain(arr).map(function(val) { return val; }).value();
        // $ExpectError
        i.chain(obj).map(function(val) { return val; }).value();
    }

    // chain filter
    {
        const coll: typeof arr = i.chain(arr).filter(function(val) { return true; }).value();
        // $ExpectError
        i.chain(obj).filter(function(val) { return true; }).value();
    }
}