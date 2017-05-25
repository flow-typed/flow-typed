// @flow
import Datepicker from 'bootstrap-datepicker';
import type { DatepickerOptions, JQuery as DatepickerJQuery } from 'bootstrap-datepicker';

(new Datepicker(): DatepickerJQuery);

// $ExpectError
(new Datepicker(): number);
