// @flow
import OneSignal, {
  type PermissionSubscriptionState
} from "react-native-onesignal";

const simpleHandler = () => {};

OneSignal.addEventListener("received", simpleHandler);
OneSignal.addEventListener("opened", simpleHandler);
OneSignal.addEventListener("ids", simpleHandler);
OneSignal.addEventListener("emailSubscription", simpleHandler);

OneSignal.removeEventListener("received", simpleHandler);
OneSignal.removeEventListener("opened", simpleHandler);
OneSignal.removeEventListener("ids", simpleHandler);
OneSignal.removeEventListener("emailSubscription", simpleHandler);

// $ExpectError
OneSignal.addEventListener("someEventName", simpleHandler);
// $ExpectError
OneSignal.removeEventListener("someEventName", simpleHandler);

OneSignal.clearListeners();
OneSignal.configure();

var IOSSettings = {};

OneSignal.init("id");
OneSignal.init("id", IOSSettings);
// $ExpectError
OneSignal.init();

OneSignal.getPermissionSubscriptionState(state => {
  // $ExpectError
  state.abc = "123";

  (state: PermissionSubscriptionState);
});
// Tags methods
OneSignal.sendTag("key", "value");
OneSignal.sendTags({
  key: "value",
  key2: "value2"
});
// $ExpectError
OneSignal.sendTag();
// $ExpectError
OneSignal.sendTag("maybe tag");

OneSignal.getTags(receivedTags => {
  // $ExpectError
  receivedTags.abc = "123";
});
// $ExpectError
OneSignal.getTags();

OneSignal.deleteTag("key");
// $ExpectError
OneSignal.deleteTag();

// Email methods

OneSignal.setEmail("email", "emailAuthCode", (error: ?Error) => {});
OneSignal.setEmail("email", (error: ?Error) => {});

OneSignal.setEmail("email", "emailAuthCode");
OneSignal.setEmail("email");
// $ExpectError
OneSignal.setEmail();

OneSignal.logoutEmail((error: ?Error) => {});
// $ExpectError
OneSignal.logoutEmail();

OneSignal.setLocationShared(true);
OneSignal.setLocationShared(false);
// $ExpectError
OneSignal.setLocationShared();

OneSignal.setSubscription(true);
OneSignal.setSubscription(false);
// $ExpectError
OneSignal.setSubscription();

OneSignal.promptLocation();

OneSignal.inFocusDisplaying(0);
OneSignal.inFocusDisplaying(1);
OneSignal.inFocusDisplaying(2);
// $ExpectError
OneSignal.inFocusDisplaying(3);
// $ExpectError
OneSignal.inFocusDisplaying();

OneSignal.postNotification(
  {
    en: "You got notification from user"
  },
  [],
  "playerId",
  { ios_attachments: { image1: "{image_url}" } }
);

OneSignal.syncHashedEmail("email");
// $ExpectError
OneSignal.syncHashedEmail();

OneSignal.setLogLevel(0, 0);
OneSignal.setLogLevel(1, 0);
OneSignal.setLogLevel(2, 0);
OneSignal.setLogLevel(3, 0);
OneSignal.setLogLevel(4, 0);
OneSignal.setLogLevel(5, 0);
OneSignal.setLogLevel(6, 0);

OneSignal.setLogLevel(0, 0);
OneSignal.setLogLevel(0, 1);
OneSignal.setLogLevel(0, 2);
OneSignal.setLogLevel(0, 3);
OneSignal.setLogLevel(0, 4);
OneSignal.setLogLevel(0, 5);
OneSignal.setLogLevel(0, 6);

// $ExpectError
OneSignal.setLogLevel(7, 0);
// $ExpectError
OneSignal.setLogLevel(0, 7);
// $ExpectError
OneSignal.setLogLevel();

OneSignal.setRequiresUserPrivacyConsent(true);
OneSignal.setRequiresUserPrivacyConsent(false);
// $ExpectError
OneSignal.setRequiresUserPrivacyConsent();

OneSignal.provideUserConsent(true);
OneSignal.provideUserConsent(false);
// $ExpectError
OneSignal.provideUserConsent();

OneSignal.userProvidedPrivacyConsent().then(result => {
  (result: boolean);
});

// IOS only
OneSignal.registerForPushNotifications();

OneSignal.promptForPushNotificationsWithUserResponse(result => {
  (result: boolean);
});
OneSignal.promptForPushNotificationsWithUserResponse(() => {});

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

OneSignal.checkPermissions(permissions => {
  // $ExpectError
  permissions.abc = 123;

  (permissions.alert: number);
  (permissions.badge: number);
  (permissions.sound: number);
});

OneSignal.promptForPushNotificationPermissions(() => {});
OneSignal.promptForPushNotificationPermissions(result => {
  (result: boolean);
});

// Android only
OneSignal.enableVibrate(true);
OneSignal.enableVibrate(false);
// $ExpectError
OneSignal.enableVibrate();

OneSignal.enableSound(true);
OneSignal.enableSound(false);
// $ExpectError
OneSignal.enableSound();

OneSignal.clearOneSignalNotifications();

OneSignal.cancelNotification(0);
// $ExpectError
OneSignal.cancelNotification("");
// $ExpectError
OneSignal.cancelNotification();
