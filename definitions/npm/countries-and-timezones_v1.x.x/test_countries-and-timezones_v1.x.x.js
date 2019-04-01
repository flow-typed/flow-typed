// @flow

import timezones from 'countries-and-timezones';

const allTimezones = timezones.getAllTimezones();
const allCountries = timezones.getAllCountries();
const timezone = timezones.getTimezonesForCountry('ES');
const country = timezones.getCountriesForTimezone('Europe/Berlin');

// $ExpectError
(timezones.getAllTimezones(): string);
// $ExpectError
(timezones.getAllCountries(): string);
// $ExpectError
(timezones.getTimezonesForCountry('ES'): number);
// $ExpectError
timezones.getTimezonesForCountry();
// $ExpectError
(timezones.getCountriesForTimezone('Europe/Zurich'): void);
// $ExpectError
timezones.getCountriesForTimezone();
