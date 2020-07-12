import { scope } from 'introscope';

// $FlowExpectedError only objects allowed
scope([])
const objectScope = scope({})
// $FlowExpectedError only objects allowed
objectScope([])


const strictScope = scope({
    numberProperty: 123,
    stringProperty: 'flow'
})({
    numberProperty: 5
});

(strictScope.numberProperty: number);
(strictScope.stringProperty: string);
// $FlowExpectedError
(strictScope.nonExisting: boolean);

// $FlowExpectedError
strictScope.newProperty = true
