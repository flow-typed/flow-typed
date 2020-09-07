import isPromise from 'is-promise';

isPromise({then:function () {}});
//=> true
isPromise(null);
//=> false
isPromise({});
//=> false
isPromise({then: true});
//=> false

// $FlowExpectedError
(isPromise(null): string);
