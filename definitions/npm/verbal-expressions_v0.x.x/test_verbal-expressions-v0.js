// @flow

import VerEx from 'verbal-expressions'

// $ExpectError number. This type is incompatible with boolean.
VerEx().startOfLine(1);
