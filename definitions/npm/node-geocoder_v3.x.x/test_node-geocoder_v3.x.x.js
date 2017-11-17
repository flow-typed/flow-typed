/* @flow */
import NodeGeocoder from "node-geocoder";

const geocoderOptions = {
  provider: "google",
  httpAdapter: "https",
  apiKey: "API_KEY",
  formatter: null
};
const geocoder = NodeGeocoder(geocoderOptions);
const address = "valid address";
geocoder.geocode(address);

const geocoderOptionsMinimal = {
  provider: "google"
};
const geocoderMinimal = NodeGeocoder(geocoderOptionsMinimal);

const geocoderOptionsErr1 = {
  provider: 3
};
// $ExpectError
const geocoderErr1 = NodeGeocoder(geocoderOptionsErr1);
const addressErr1 = 2;
// $ExpectError
geocoder.geocode(addressErr1);

const geocoderOptionsErr2 = 2;
// $ExpectError
const geocoderErr2 = NodeGeocoder(geocoderOptionsErr2);
const addressErr2 = null;
// $ExpectError
geocoder.geocode(addressErr2);
