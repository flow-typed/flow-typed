import { scope } from 'introscope';

const strictScope = scope({
    numberProperty: 123,
    stringProperty: 'flow'
});

(strictScope.numberProperty: number);
(strictScope.stringProperty: string);
// $ExpectError
(strictScope.nonExisting: boolean);

// $ExpectError does not allow non-string keys
(strictScope[123]: boolean);
