// @flow
import OneSignal, {
  type PermissionSubscriptionState
} from "react-native-onesignal";
import { it, describe } from "flow-typed-test";

describe("Listeners", () => {
  it("must call addEventListener and removeEventListener with supported event types", () => {
    const simpleHandler = () => {};

    OneSignal.addEventListener("received", simpleHandler);
    OneSignal.addEventListener("opened", simpleHandler);
    OneSignal.addEventListener("ids", simpleHandler);
    OneSignal.addEventListener("emailSubscription", simpleHandler);

    OneSignal.removeEventListener("received", simpleHandler);
    OneSignal.removeEventListener("opened", simpleHandler);
    OneSignal.removeEventListener("ids", simpleHandler);
    OneSignal.removeEventListener("emailSubscription", simpleHandler);
    OneSignal.clearListeners();
  });

  it("must throw error when type not supported", () => {
    // $ExpectError
    OneSignal.addEventListener("someEventName", simpleHandler);
    // $ExpectError
    OneSignal.removeEventListener("someEventName", simpleHandler);
  });
});

describe("Tags methods", () => {
  describe("sendTag", () => {
    it("must call sendTag with key,value arguments", () => {
      OneSignal.sendTag("key", "value");
    });

    it("must throw error when args aren't enough", () => {
      // $ExpectError
      OneSignal.sendTag();
      // $ExpectError
      OneSignal.sendTag("maybe tag");
    });

    it("must call sendTag with ObjectMap tags", () => {
      OneSignal.sendTags({
        key: "value",
        key2: "value2"
      });
    });
  });

  describe("getTags", () => {
    it("must return read only tags object", () => {
      OneSignal.getTags(receivedTags => {
        // $ExpectError
        receivedTags.abc = "123";
      });
    });
    it("must throw error when it called without callback fn", () => {
      // $ExpectError
      OneSignal.getTags();
    });
  });

  it("must call deleteTag only with one string argument", () => {
    OneSignal.deleteTag("key");
    // $ExpectError
    OneSignal.deleteTag();
  });
});

describe("Email methods", () => {
  describe("setEmail", () => {
    it("must call setEmail with emailAuth code", () => {
      OneSignal.setEmail("email", "emailAuthCode", (error: ?Error) => {});
      OneSignal.setEmail("email", "emailAuthCode");
    });

    it("must call setEmail without emailAuth code", () => {
      OneSignal.setEmail("email", (error: ?Error) => {});
      OneSignal.setEmail("email");
    });

    it("must throw error when call setEmail without args", () => {
      // $ExpectError
      OneSignal.setEmail();
    });
  });

  it("must call callback fn with error or void", () => {
    OneSignal.logoutEmail((error: ?Error) => {});

    // $ExpectError
    OneSignal.logoutEmail();
  });

  it("must call syncHashedEmail with string", () => {
    OneSignal.syncHashedEmail("email");
    // $ExpectError
    OneSignal.syncHashedEmail();
  });
});

describe("Others", () => {
  it("must call setLocationShared with boolean", () => {
    OneSignal.setLocationShared(true);
    OneSignal.setLocationShared(false);
    // $ExpectError
    OneSignal.setLocationShared();
  });

  it("must call setSubscription with boolean", () => {
    OneSignal.setSubscription(true);
    OneSignal.setSubscription(false);
    // $ExpectError
    OneSignal.setSubscription();
  });
  it("must call inFocusDisplaying with FocusBehaviors type", () => {
    OneSignal.inFocusDisplaying(0);
    OneSignal.inFocusDisplaying(1);
    OneSignal.inFocusDisplaying(2);
    // $ExpectError
    OneSignal.inFocusDisplaying(3);
    // $ExpectError
    OneSignal.inFocusDisplaying();
  });
});

describe("setLogLevel", () => {
  it("must call setLogLevel with supported nsLogLevel", () => {
    OneSignal.setLogLevel(0, 0);
    OneSignal.setLogLevel(1, 0);
    OneSignal.setLogLevel(2, 0);
    OneSignal.setLogLevel(3, 0);
    OneSignal.setLogLevel(4, 0);
    OneSignal.setLogLevel(5, 0);
    OneSignal.setLogLevel(6, 0);
  });

  it("must call setLogLevel with supported visualLogLevel", () => {
    OneSignal.setLogLevel(0, 0);
    OneSignal.setLogLevel(0, 1);
    OneSignal.setLogLevel(0, 2);
    OneSignal.setLogLevel(0, 3);
    OneSignal.setLogLevel(0, 4);
    OneSignal.setLogLevel(0, 5);
    OneSignal.setLogLevel(0, 6);
  });

  it("must throw error when LogLevel more than 6", () => {
    // $ExpectError
    OneSignal.setLogLevel(7, 0);
    // $ExpectError
    OneSignal.setLogLevel(0, 7);
    // $ExpectError
    OneSignal.setLogLevel();
  });
});

it("must call setRequiresUserPrivacyConsent with boolean", () => {
  OneSignal.setRequiresUserPrivacyConsent(true);
  OneSignal.setRequiresUserPrivacyConsent(false);
  // $ExpectError
  OneSignal.setRequiresUserPrivacyConsent();
});

it("must call provideUserConsent with boolean", () => {
  OneSignal.provideUserConsent(true);
  OneSignal.provideUserConsent(false);
  // $ExpectError
  OneSignal.provideUserConsent();
});

it("must return promise when call userProvidedPrivacyConsent", () => {
  OneSignal.userProvidedPrivacyConsent().then(result => {
    (result: boolean);
  });
});

describe("IOS only", () => {
  it("must have registerForPushNotifications function", () => {
    OneSignal.registerForPushNotifications();
  });

  it("must call promptForPushNotificationsWithUserResponse with callback", () => {
    OneSignal.promptForPushNotificationsWithUserResponse(result => {
      (result: boolean);
    });
    OneSignal.promptForPushNotificationsWithUserResponse(() => {});
  });

  it("must call requestPermissions with Permissions", () => {
    OneSignal.requestPermissions({
      alert: true,
      badge: true,
      sound: true
    });
    OneSignal.requestPermissions({
      alert: false,
      badge: false
    });

    OneSignal.requestPermissions({
      alert: false
    });

    OneSignal.requestPermissions();
  });

  it("must call checkPermissions with callback adn return read only permissions", () => {
    OneSignal.checkPermissions(permissions => {
      // $ExpectError
      permissions.abc = 123;

      (permissions.alert: number);
      (permissions.badge: number);
      (permissions.sound: number);
    });

    // $ExpectError
    OneSignal.checkPermissions();
  });

  it("must call promptForPushNotificationPermissions with callback", () => {
    OneSignal.promptForPushNotificationPermissions(() => {});
    OneSignal.promptForPushNotificationPermissions(result => {
      (result: boolean);
    });
  });
});

describe("Android only", () => {
  it("must call enableVibrate with boolean", () => {
    OneSignal.enableVibrate(true);
    OneSignal.enableVibrate(false);
    // $ExpectError
    OneSignal.enableVibrate();
  });

  it("must call enableSound with boolean", () => {
    OneSignal.enableSound(true);
    OneSignal.enableSound(false);
    // $ExpectError
    OneSignal.enableSound();
  });

  it("must call cancelNotification with number", () => {
    OneSignal.cancelNotification(0);
    // $ExpectError
    OneSignal.cancelNotification("");
    // $ExpectError
    OneSignal.cancelNotification();
  });

  it("must call it without errors", () => {
    OneSignal.clearOneSignalNotifications();
  });
});

it("must have static method", () => {
  OneSignal.configure();
  OneSignal.promptLocation();
});

it("must call init with id and oprtions for IOS", () => {
  var IOSSettings = {};

  OneSignal.init("id");
  OneSignal.init("id", IOSSettings);
  // $ExpectError
  OneSignal.init();
});

it("must return PermissionSubscriptionState", () => {
  OneSignal.getPermissionSubscriptionState(state => {
    // $ExpectError - read only state
    state.abc = "123";

    (state: PermissionSubscriptionState);
  });
});

it("must call postNotification", () => {
  OneSignal.postNotification(
    {
      en: "You got notification from user"
    },
    [],
    "playerId",
    { ios_attachments: { image1: "{image_url}" } }
  );
});
