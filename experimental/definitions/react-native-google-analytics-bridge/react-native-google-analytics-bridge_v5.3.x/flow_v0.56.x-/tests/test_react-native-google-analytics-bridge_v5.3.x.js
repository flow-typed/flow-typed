import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from "react-native-google-analytics-bridge";

let tracker = new GoogleAnalyticsTracker("UA-12345-0");
let tracker1 = new GoogleAnalyticsTracker("UA-12345-1");
let tracker2 = new GoogleAnalyticsTracker("UA-12345-2");

tracker1.trackScreenView("Home");
// $ExpectError trackScreenView requires a string argument
tracker1.trackScreenView({ foo: bar });
tracker1.trackEvent("Customer", "New");

GoogleAnalyticsSettings.setDispatchInterval(30);
GoogleAnalyticsSettings.setDryRun(true);

GoogleTagManager.openContainerWithId("GT-NZT48")
  .then(() => {
    return GoogleTagManager.stringForKey("pack");
  })
  .then(pack => {
    console.log("Pack: ", pack);
  })
  .catch(err => {
    console.log(err);
  });

tracker2.trackScreenViewWithCustomDimensionValues("Home", { test: "Beta" });
tracker.trackScreenView("Home");
tracker.trackEvent("testcategory", "testaction");
tracker.trackEvent("testcategory", "testaction", {
  label: "v1.0.3",
  value: 22
});
// $ExpectError name option is required
tracker.trackTiming("testcategory", 13000, {});
tracker.trackTiming("testcategory", 13000, { name: "LoadList" });
tracker.trackTiming("testcategory", 13000, {
  name: "loadList",
  label: "v1.0.3"
});
tracker.trackPurchaseEvent(
  {
    id: "P12345",
    name: "Android Warhol T-Shirt",
    category: "Apparel/T-Shirts",
    brand: "Google",
    variant: "Black",
    price: 29.2,
    quantity: 1,
    couponCode: "APPARELSALE"
  },
  {
    id: "T12345",
    affiliation: "Google Store - Online",
    revenue: 37.39,
    tax: 2.85,
    shipping: 5.34,
    couponCode: "SUMMER2013"
  },
  "Ecommerce",
  "Purchase"
);

tracker.trackMultiProductsPurchaseEventWithCustomDimensionValues(
  [
    {
      id: "P12345",
      name: "Android Warhol T-Shirt",
      category: "Apparel/T-Shirts",
      brand: "Google",
      variant: "Black",
      price: 29.2,
      quantity: 1,
      couponCode: "APPARELSALE"
    },
    {
      id: "P54321",
      name: "IOS T-Shirt",
      category: "Apparel/T-Shirts",
      brand: "Apple",
      variant: "Black",
      price: 10.1,
      quantity: 1,
      couponCode: "APPARELSALE"
    }
  ],
  {
    id: "T12345",
    affiliation: "Store - Online",
    revenue: 52.5,
    tax: 7.86,
    shipping: 5.34,
    couponCode: "SUMMER2013"
  },
  "Ecommerce",
  "Purchase",
  { "1": "premium", "5": "foo" }
);

tracker.trackSocialInteraction("Twitter", "Post");
