// @flow
import Datepair from 'datepair.js';
import type { DatepairOptions, DatepairJQuery } from 'datepair.js';

(new Datepair(): DatepairJQuery);

// $ExpectError
(new Datepair(): number);
