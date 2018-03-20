import { introscope } from 'introscope';

// `introscope` is using any type on purpose,
// some developers require only part of their tests
// to have strict types.
const anyScope = introscope({
    existingProperty: 123
});

(anyScope.nonExistingProp1: string);
(anyScope.nonExistingProp2: number);
// $ExpectError does not allow non-string keys
(anyScope[123]: boolean);
