/* @flow */

var webdriverio = require("webdriverio");
var options = { desiredCapabilities: { browserName: "chrome" } };
var client = webdriverio.remote(options);
client
  .init()
  .url("https://duckduckgo.com/")
  .setValue("#search_form_input_homepage", "WebdriverIO")
  .click("#search_button_homepage")
  .getTitle()
  .then(function(title) {
    console.log("Title is: " + title);
    // outputs:
    // "Title is: WebdriverIO (Software) at DuckDuckGo"
  })
  .end();

const e = client.element("~some-id");
e.value.getText().then(t => {
  console.log("Text:" + t);
});

client
  .init()
  .getTitle()
  // $ExpectError
  .then((t: number) => {})
  .end();
