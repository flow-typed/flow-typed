// @flow

import bizniz from "bizniz";

(bizniz.addWeekDays(): Date);
(bizniz.weekDaysBetween(): number);

// $ExpectError
(bizniz.weekDaysBetween(): string);
(bizniz.addWeekDays(): number);

