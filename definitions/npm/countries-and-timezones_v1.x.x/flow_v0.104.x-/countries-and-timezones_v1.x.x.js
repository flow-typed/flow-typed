declare module 'countries-and-timezones' {
    declare export type CountryInfo = {
      id: string,
      name: string,
      timezone: Array<string>,
    };
    
    declare export type Countries = {
      [countryCode: string]: CountryInfo,
    };
    
    declare export type TimezoneInfo = {
      name: string,
      utcOffset: number,
      offsetStr: string,
      countries: Array<string>,
    }
    
    declare export type Timezones = {
      [timezoneName: string]: TimezoneInfo,
    }
    
    declare export type RawData = {
      countries: Countries,
      timezones: Timezones,
    }
  
    declare module.exports: {
      raw: RawData,
      getAllCountries(): Countries,
      getAllTimezones(): Timezones,
      getTimezonesForCountry(countryId: string): Array<TimezoneInfo>,
      getCountriesForTimezone(timezoneId: string): Array<CountryInfo>,
    };
}
  