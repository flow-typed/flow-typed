window.analytics.load("apiKey");

// $ExpectError: should be a string
window.analytics.load(2);

window.analytics.identify("userId", {}, { context: { ip: "0.0.0.1" }})

// $ExpectError: should be a string
window.analytics.identify(2, {}, { context: { ip: "0.0.0.1" }})

window.analytics.track("buttonClick", {}, { context: { ip: "0.0.0.1" }})

// $ExpectError: should be a string
window.analytics.track(2, {}, { context: { ip: "0.0.0.1" }})

window.analytics.page("pageName", {}, { context: { ip: "0.0.0.1" }})

// $ExpectError: should be a string
window.analytics.page(2, {}, { context: { ip: "0.0.0.1" }})