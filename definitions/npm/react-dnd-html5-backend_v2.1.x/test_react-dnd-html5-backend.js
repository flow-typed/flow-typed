// @flow

import {getEmptyImage} from 'react-dnd-html5-backend';

(getEmptyImage(): Image);
// $ExpectError
(getEmptyImage(): number);
