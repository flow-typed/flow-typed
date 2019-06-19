// @flow

import clone from 'clone';

// $ExpectError
(clone({foo: 'bar'}): number);

(clone('yay!'): string);
