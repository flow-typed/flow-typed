// @flow
import { describe, it } from 'flow-typed-test';

import timezones from 'countries-and-timezones';

describe('The "timezones" component', () => {
    describe('getAllTimezones function', () => {
        it('should return an object of timezones', () => {
            const allTimezones = timezones.getAllTimezones();
            // $ExpectError
            (timezones.getAllTimezones(): string);
        });
    });

    describe('getAllCountries function', () => {
        it('should return an object of countries', () => {
            const allCountries = timezones.getAllCountries();
            // $ExpectError
            (timezones.getAllCountries(): string);
        });
    });
    
    describe('getTimezonesForCountry function', () => {
        it('should return an array of timezones for specified country', () => {
            const timezone = timezones.getTimezonesForCountry('ES');
            // $ExpectError
            (timezones.getTimezonesForCountry('ES'): number);
        });

        it('should throw an error without specified country', () => {
            // $ExpectError
            timezones.getTimezonesForCountry();
        });
    });

    describe('getCountriesForTimezone function', () => {
        it('should return an array of countries for specified timezone', () => {
            const timezone = timezones.getCountriesForTimezone('Europe/Berlin');
            // $ExpectError
            (timezones.getCountriesForTimezone('Europe/Berlin'): void);
        });

        it('should throw an error without specified timezone', () => {
            // $ExpectError
            timezones.getCountriesForTimezone();
        });
    });
});
