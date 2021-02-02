// @flow
import { describe, it } from 'flow-typed-test';

import timezones from 'countries-and-timezones';

describe('The "timezones" component', () => {
    describe('getAllTimezones function', () => {
        it('should return an object of timezones', () => {
            const allTimezones = timezones.getAllTimezones();
            // $FlowExpectedError
            (timezones.getAllTimezones(): string);
        });
    });

    describe('getAllCountries function', () => {
        it('should return an object of countries', () => {
            const allCountries = timezones.getAllCountries();
            // $FlowExpectedError
            (timezones.getAllCountries(): string);
        });
    });
    
    describe('getTimezonesForCountry function', () => {
        it('should return an array of timezones for specified country', () => {
            const timezone = timezones.getTimezonesForCountry('ES');
            // $FlowExpectedError
            (timezones.getTimezonesForCountry('ES'): number);
        });

        it('should throw an error without specified country', () => {
            // $FlowExpectedError
            timezones.getTimezonesForCountry();
        });
    });

    describe('getCountriesForTimezone function', () => {
        it('should return an array of countries for specified timezone', () => {
            const timezone = timezones.getCountriesForTimezone('Europe/Berlin');
            // $FlowExpectedError
            (timezones.getCountriesForTimezone('Europe/Berlin'): void);
        });

        it('should throw an error without specified timezone', () => {
            // $FlowExpectedError
            timezones.getCountriesForTimezone();
        });
    });
});
