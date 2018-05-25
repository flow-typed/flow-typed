// @flow

import bizniz from "bizniz";

(bizniz.addWeekDays(new Date(0), 1): Date);
(bizniz.subtractWeekDays(new Date(0), 1): Date);
(bizniz.isWeekDay(new Date(0)): boolean);
(bizniz.isWeekendDay(new Date(0)): boolean);
(bizniz.weekDaysBetween(new Date(0), new Date(0)): number);
(bizniz.weekendDaysBetween(new Date(0), new Date(0)): number);
(bizniz.dateIsBefore(new Date(0), new Date(0)): boolean);
(bizniz.daysBetween(new Date(0), new Date(0)): number);

// $ExpectError
(bizniz.weekDaysBetween('', 1): string);
(bizniz.addWeekDays(new Date(0), 1): number);


