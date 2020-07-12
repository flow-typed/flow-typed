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
// $FlowExpectedError
const geocoderErr1 = NodeGeocoder(geocoderOptionsErr1);
const addressErr1 = 2;
// $FlowExpectedError
geocoder.geocode(addressErr1);

const geocoderOptionsErr2 = 2;
// $FlowExpectedError
const geocoderErr2 = NodeGeocoder(geocoderOptionsErr2);
const addressErr2 = null;
// $FlowExpectedError
geocoder.geocode(addressErr2);
