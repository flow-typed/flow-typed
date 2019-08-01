declare module "node-geocoder" {
  declare type geocoderProvider = "google" | "freegeoip" | string;
  declare type geocoderAdapter = "https" | "http" | "request" | Object;
  declare type geocoderFormatter = "gpx" | "string";

  declare type geocoderOptions = {
    provider: geocoderProvider,
    httpAdapter?: geocoderAdapter,
    apiKey?: string,
    formatter?: ?geocoderFormatter,
    formatterPattern?: string
  };

  declare type geocoderResultItem = {
    latitude: number,
    longitude: number,
    country: string,
    countryCode: string,
    city: string,
    zipcode: string,
    streetName: string,
    streetNumber: string,
    administrativeLevels: {
      level1long: string,
      level1short: string,
      level2long: string,
      level2short: string
    },
    provider: geocoderProvider
  };
  declare type geocoderResult = Array<geocoderResultItem>;

  declare type geocoderError = {
    Error: string,
    isOperational: boolean
  };

  declare type geocoderCB = (err: ?geocoderError, res: ?geocoderResult) => any;

  declare module.exports: (
    options: geocoderOptions
  ) => {
    geocode: (address: string, cb?: geocoderCB) => Promise<geocoderResult>
  };
}
