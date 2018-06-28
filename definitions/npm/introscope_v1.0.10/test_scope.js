import { scope } from 'introscope';

// $ExpectError only objects allowed
scope([])
const objectScope = scope({})
// $ExpectError only objects allowed
objectScope([])


const strictScope = scope({
    numberProperty: 123,
    stringProperty: 'flow'
})({
    numberProperty: 5
});

(strictScope.numberProperty: number);
(strictScope.stringProperty: string);
// $ExpectError
(strictScope.nonExisting: boolean);

// $ExpectError
strictScope.newProperty = true
