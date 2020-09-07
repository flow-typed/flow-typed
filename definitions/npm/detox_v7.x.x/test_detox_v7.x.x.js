/* @flow */

const detox = require("detox");
const { device, expect, element, by, waitFor } = require("detox");

const configs = {
  configurations: {
    "ios.sim.debug": {
      binaryPath:
        "packages/apps/Example/ios/build/Build/Products/Debug-iphonesimulator/example.app",
      build:
        "xcodebuild -project packages/apps/Example/ios/Example.xcodeproj -scheme Example -configuration Debug -sdk iphonesimulator -derivedDataPath packages/apps/Example/ios/build",
      type: "ios.simulator",
      name: "iPhone X"
    }
  }
};

// Detox Object API
// ----------------
detox.cleanup();
// $FlowExpectedError
detox.init({ configurations: "" }, { initGlobals: 123, launchApp: false });
detox.init(configs, { initGlobals: false });

// Device Object API
// -----------------
device.launchApp({});
device.launchApp({ newInstance: true });
device.launchApp({ permissions: { calendar: "YES" } });
device.launchApp({ url: "url", newInstance: false });
device.launchApp({ userNotification: { title: "push" }, newInstance: true });
device.launchApp({ launchArgs: { arg1: 1, arg2: "2" } });
// $FlowExpectedError
device.launchApp({ permissions: false, url: false });

// $FlowExpectedError
device.terminateApp({ err: "err" });
device.terminateApp();
device.terminateApp("other.bundle.id");
device.reloadReactNative();
device.sendToHome();
device.installApp();
device.uninstallApp();
// $FlowExpectedError
device.openURL({ url: "https://flow.org", sourceApp: false });
device.openURL({ url: "https://flow.org" });

// $FlowExpectedError
device.sendUserNotification();
const userNotificationCalendarTrigger = {
  trigger: {
    type: "calendar",
    "date-components": {
      era: 1,
      year: 2017,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      weekday: 0,
      weekdayOrdinal: 0,
      quarter: 1,
      weekOfMonth: 1,
      weekOfYear: 1,
      leapMonth: false
    },
    repeats: true
  },
  title: "From calendar",
  subtitle: "Subtitle",
  body: "From calendar",
  badge: 1,
  payload: {
    key1: "value1",
    key2: "value2"
  },
  category: "com.example.category",
  "user-text": "Hi there!",
  "content-available": 0,
  "action-identifier": "default"
};

const userNotificationLocationTrigger = {
  trigger: {
    type: "location",
    region: {
      identifier: "my-id",
      center: {
        latitude: 123.31,
        longitude: 21.31
      },
      radius: 15.5,
      notifyOnEntry: true,
      notifyOnExit: false
    },
    repeats: true
  },
  title: "Title",
  subtitle: "Subtitle",
  body: "Body",
  badge: 1,
  payload: {
    key1: "value1",
    key2: "value2"
  },
  category: "com.example.category",
  "user-text": "Hi there!",
  "content-available": 0,
  "action-identifier": "default2"
};
const userNotificationTimeIntervalTrigger = {
  trigger: {
    type: "timeInterval",
    timeInterval: 30,
    repeats: false
  },
  title: "Title",
  subtitle: "Subtitle",
  body: "Body",
  badge: 1,
  payload: {
    key1: "value1",
    key2: "value2"
  },
  category: "com.example.category",
  "user-text": "Hi there!",
  "content-available": 0,
  "action-identifier": "default2"
};
const userNotificationPushTrigger = {
  trigger: {
    type: "push"
  },
  title: "From push",
  subtitle: "Subtitle",
  body: "Body",
  badge: 1,
  payload: {
    key1: "value1",
    key2: "value2"
  },
  category: "com.example.category",
  "content-available": 0,
  "action-identifier": "default"
};
device.sendUserNotification(userNotificationCalendarTrigger);
device.sendUserNotification(userNotificationLocationTrigger);
device.sendUserNotification(userNotificationTimeIntervalTrigger);
device.sendUserNotification(userNotificationPushTrigger);

// $FlowExpectedError
device.setOrientation("normal");
device.setOrientation("portrait");

// $FlowExpectedError
device.setLocation();
device.setLocation(32.04, 34.78);

device.setURLBlacklist(["https://flow.org", "https://flow.org"]);
device.enableSynchronization();
device.disableSynchronization();
device.resetContentAndSettings();
device.getPlatform();

// Matchers
// --------
by.id("flowType");
by.text("flowType is great!");
by.label("welcome");
// $FlowExpectedError
by.label(123);
by.type("RCTImageView");
by.traits(["button"]);
// $FlowExpectedError
by.traits("button");

// Actions on element
// ------------------
element(by.id("testElement")).tap();
element(by.id("testElement")).longPress();

// $FlowExpectedError
element(by.id("testElement")).multiTap(true);
element(by.id("testElement")).multiTap(3);

// $FlowExpectedError
element(by.id("testElement")).tapAtPoint();
element(by.id("testElement")).tapAtPoint({ x: 5, y: 10 });

// $FlowExpectedError
element(by.id("testElement")).typeText(false);
element(by.id("testElement")).typeText("type this");

// $FlowExpectedError
element(by.id("testElement")).replaceText();
element(by.id("testElement")).replaceText("text");

element(by.id("testElement")).clearText();

// $FlowExpectedError
element(by.id("testElement")).scroll();
element(by.id("testElement")).scroll(123, "down");

// $FlowExpectedError
element(by.id("testElement")).scrollTo("down");
element(by.id("testElement")).scrollTo("left");

// $FlowExpectedError
element(by.id("testElement")).swipe("sideways", "medium", 0.5);
element(by.id("testElement")).swipe("down", "fast", 0.5);

// Expect API
// ----------
expect(element(by.id("UniqueId204"))).toBeVisible();
expect(element(by.id("UniqueId204"))).toBeNotVisible();
expect(element(by.id("UniqueId204"))).toBeVisible();
expect(element(by.id("UniqueId204"))).toExist();
// $FlowExpectedError
expect(element(by.id("UniqueId204"))).toHaveId(123);
expect(element(by.id("UniqueId204"))).toHaveId("someTestID");

// $FlowExpectedError
expect(element(by.id("UniqueId204"))).toHaveLabel();
expect(element(by.id("UniqueId204"))).toHaveLabel("testLabel");

// $FlowExpectedError
expect(element(by.id("UniqueId204"))).toHaveText(123);
expect(element(by.id("UniqueId204"))).toHaveText("some text");
// $FlowExpectedError
expect(element(by.id("UniqueId204"))).toHaveValue(true);
expect(element(by.id("UniqueId204"))).toHaveValue("1");
expect(element(by.id("UniqueId204"))).toNotExist();

// waitFor API
waitFor(element(by.id("UniqueId204"))).toBeNotVisible();
waitFor(element(by.id("UniqueId204"))).toBeNotVisible();
waitFor(element(by.id("UniqueId204"))).toBeVisible();
// $FlowExpectedError
waitFor(element(by.id("UniqueId204")))
  .toExist()
  .something();
waitFor(element(by.id("UniqueId204"))).toExist();
waitFor(element(by.id("UniqueId204"))).toHaveText("text");
waitFor(element(by.id("UniqueId204"))).toHaveValue("0");
waitFor(element(by.id("UniqueId204"))).toNotExist();
// $FlowExpectedError
waitFor(element(by.id("UniqueId204"))).whileElement("someID");
waitFor(element(by.id("UniqueId204"))).whileElement(by.id("ScrollView630"));
// $FlowExpectedError
waitFor(element(by.id("UniqueId204"))).withTimeout(false);
waitFor(element(by.id("UniqueId204"))).withTimeout(1000);

// Example tests
const e2e = {
  NATIVE_BUTTON: "NATIVE_BUTTON",
  WELCOME_VIEW: "WELCOME_VIEW"
};

const welcome = element(by.id(e2e.WELCOME_VIEW));
expect(welcome).toBeVisible();
const welcome_text = "Shake your phone to open the developer menu.";
expect(element(by.text(welcome_text))).toBeVisible();
const btn = element(by.id(e2e.NATIVE_BUTTON));
btn.tap();
