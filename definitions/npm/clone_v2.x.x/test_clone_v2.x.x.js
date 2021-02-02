// @flow

import clone from 'clone';

// $FlowExpectedError
(clone({foo: 'bar'}): number);

(clone('yay!'): string);
