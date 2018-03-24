import { introscope } from 'introscope';

// $ExpectError only objects allowed
introscope([])

const anyScope = introscope({
    existingProperty: 123
})({});

// it's an ugly any, on purpose :)
(anyScope.existingProperty: number);
(anyScope.existingProperty: boolean);
(anyScope.nonExistingProp1: string);
(anyScope.nonExistingProp2: number);
