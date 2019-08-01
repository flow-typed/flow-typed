import fetchJsonP from "fetch-jsonp";

fetchJsonP("http://example.org/script.js")
  .then(response => response.json())
  .then(json => json.data.url);

fetchJsonP("http://example.org/script.js", {}).then(response => response.ok);

fetchJsonP("http://example.org/script.js", { timeout: 1000 });

fetchJsonP("http://example.org/script.js", {
  timeout: 1000,
  jsonpCallback: "callbackParameter",
  jsonpCallbackFunction: "function_name_of_jsonp_response"
});

// $ExpectError
fetchJsonP(5);

// $ExpectError
fetchJsonP("http://example.org/script.js").json();

// $ExpectError
fetchJsonP("http://example.org/script.js", {
  jsonpCallbackFunction: () => {}
});
