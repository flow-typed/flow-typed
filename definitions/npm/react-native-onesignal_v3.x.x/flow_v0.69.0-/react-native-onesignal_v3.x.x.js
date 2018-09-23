declare module "react-native-onesignal" {
  // https://github.com/geektimecoil/react-native-onesignal/blob/master/index.js#L61-L64
  declare export type EventTypes =
    | "received"
    | "opened"
    | "ids"
    | "emailSubscription";

  // IOSPermissions & IOSPermissionsReturn:  number return getPermissionSubscriptionState method, boolean use in requestPermissions
  declare export type IOSPermissions = {|
    alert?: boolean,
    badge?: boolean,
    sound?: boolean
  |};
  declare export type IOSPermissionsReturn = {|
    alert: number,
    badge: number,
    sound: number
  |};

  // https://documentation.onesignal.com/docs/react-native-sdk#section--setloglevel-
  declare export type LogLevels =
    | 0 //None
    | 1 //Fatal
    | 2 //Errors
    | 3 //Warnings
    | 4 //Info
    | 5 //Debug
    | 6; //Verbose

  // https://documentation.onesignal.com/v5.0/docs/react-native-sdk#section-both-ios-and-android
  declare export type FocusBehaviors =
    | 0 //None
    | 1 //InAppAlert
    | 2; //Notification

  declare export type PermissionSubscriptionState = $ReadOnly<{|
    emailAddress: ?string,
    emailSubscribed: boolean,
    emailUserId: ?string,
    hasPrompted: boolean,
    notificationsEnabled: boolean,
    pushToken: ?string,
    subscriptionEnabled: boolean,
    userId: string,
    userSubscriptionEnabled: boolean
  |}>;

  declare export type Tags = { [key: string]: string };

  declare export default class OneSignal {
    static addEventListener(type: EventTypes, handler: Function): void;

    static removeEventListener(type: EventTypes, handler: Function): void;

    static clearListeners(): void;

    static configure(): void;

    static init(appId: string, iOSSettings?: Object): void;

    static getPermissionSubscriptionState(
      (state: PermissionSubscriptionState) => void
    ): void;

    static sendTag(key: string, value: string): void;

    static sendTags(tags: Tags): void;

    static getTags((receivedTags: $ReadOnly<Tags>) => void): void;

    static deleteTag(key: string): void;

    // https://github.com/geektimecoil/react-native-onesignal/blob/master/index.js#L238-L250
    static setEmail(email: string, emailAuthCode: string): void;
    static setEmail(
      email: string,
      emailAuthCode: string,
      (error?: Error) => void
    ): void;

    static setEmail(email: string, (error: ?Error) => void): void;
    static setEmail(email: string): void;

    static logoutEmail((error: ?Error) => void): void;

    static setLocationShared(shared: boolean): void;

    static setSubscription(enable: boolean): void;

    static promptLocation(): void;

    static inFocusDisplaying(displayOption: FocusBehaviors): void;

    static postNotification(
      contents: Object,
      data: Array<*>,
      playerId: string,
      otherParameters: Object
    ): void;

    static syncHashedEmail(email: string): void;

    static setLogLevel(nsLogLevel: LogLevels, visualLogLevel: LogLevels): void;

    static setRequiresUserPrivacyConsent(required: boolean): void;

    static provideUserConsent(granted: boolean): void;

    static userProvidedPrivacyConsent(): Promise<boolean>;

    // IOS only
    static registerForPushNotifications(): void;

    static promptForPushNotificationsWithUserResponse(
      (result: boolean) => void
    ): void;

    static requestPermissions(permissions: ?IOSPermissions): void;

    static checkPermissions(
      (permissions: $ReadOnly<IOSPermissionsReturn>) => void
    ): void;

    static promptForPushNotificationPermissions(
      (result: boolean) => void
    ): void;

    // Android only
    static enableVibrate(enable: boolean): void;

    static enableSound(enable: boolean): void;

    static clearOneSignalNotifications(): void;

    static cancelNotification(id: number): void;
  }
}
