declare module 'react-native-onesignal' {
  // https://github.com/geektimecoil/react-native-onesignal/blob/f7ce2a9c9592f3a497eda88fc6ab2dcf235a3f15/index.js#L80-L87
  declare export type EventTypes =
    | 'emailSubscription'
    | 'ids'
    | 'inAppMessageClicked'
    | 'opened'
    | 'received';

  // IOSPermissions & IOSPermissionsReturn:  number return getPermissionSubscriptionState method, boolean use in requestPermissions
  declare export type IOSPermissions = {|
    alert?: boolean,
    badge?: boolean,
    sound?: boolean,
  |};

  declare export type IOSPermissionsReturn = {|
    alert: number,
    badge: number,
    sound: number,
  |};

  // https://documentation.onesignal.com/docs/react-native-sdk#section--setloglevel-
  declare export type LogLevels =
    | 0 // None
    | 1 // Fatal
    | 2 // Errors
    | 3 // Warnings
    | 4 // Info
    | 5 // Debug
    | 6; // Verbose

  // https://documentation.onesignal.com/docs/react-native-sdk#section-both-ios-and-android
  declare export type FocusBehaviors =
    | 0 // None
    | 1 // InAppAlert
    | 2; // Notification

  declare export type PermissionSubscriptionState = $ReadOnly<{|
    emailAddress: ?string,
    emailSubscribed: boolean,
    emailUserId: ?string,
    hasPrompted: boolean,
    notificationsEnabled: boolean,
    pushToken: ?string,
    subscriptionEnabled: boolean,
    userId: string,
    userSubscriptionEnabled: boolean,
  |}>;

  declare export type Tags = { [key: string]: string };

  // https://documentation.onesignal.com/docs/react-native-sdk#section-ios-initialization-parameters
  declare export type IosInitOptions = {|
    kOSSettingsKeyAutoPrompt?: boolean,
    kOSSettingsKeyInAppLaunchURL?: boolean,
    kOSSSettingsKeyPromptBeforeOpeningPushURL?: boolean,
    kOSSettingsKeyInFocusDisplayOption?: 0 | 1 | 2,
  |};

  declare export type OnIdsEvent = $ReadOnly<{|
    pushToken: string,
    userId: string,
  |}>;

  declare export type InAppMessageClickEvent = $ReadOnly<{|
    clickUrl?: string,
    clickName?: string,
    firstClick: boolean,
    closesMessage: boolean,
  |}>;

  declare export type TriggerValue = string | number;

  declare export default class OneSignal {
    static addEventListener(type: 'ids', handler: (OnIdsEvent) => mixed): void;
    static addEventListener(
      type: 'inAppMessageClicked',
      handler: (InAppMessageClickEvent) => mixed
    ): void;
    static addEventListener(
      type: 'emailSubscription' | 'opened' | 'received',
      handler: (...args: any) => mixed
    ): void;

    static removeEventListener(
      type: EventTypes,
      handler: (...args: any) => mixed
    ): void;

    static clearListeners(): void;

    static init(appId: string, iOSSettings?: IosInitOptions): void;

    static getPermissionSubscriptionState(
      (state: PermissionSubscriptionState) => mixed
    ): void;

    static sendTag(key: string, value: string): void;
    static sendTags(tags: Tags): void;
    static getTags((receivedTags: $ReadOnly<Tags>) => mixed): void;
    static deleteTag(key: string): void;

    // https://github.com/geektimecoil/react-native-onesignal/blob/f7ce2a9c9592f3a497eda88fc6ab2dcf235a3f15/index.js#L276-L292
    static setEmail(email: string, emailAuthCode: string): void;
    static setEmail(
      email: string,
      emailAuthCode: string,
      (error?: Error) => mixed
    ): void;
    static setEmail(email: string, (error: ?Error) => mixed): void;
    static setEmail(email: string): void;
    static logoutEmail((error: ?Error) => mixed): void;

    static setLocationShared(shared: boolean): void;

    static setSubscription(enable: boolean): void;

    static promptLocation(): void;

    static inFocusDisplaying(displayOption: FocusBehaviors): void;

    static postNotification(
      contents: any,
      data: any,
      playerId: string,
      otherParameters: any
    ): void;

    static syncHashedEmail(email: string): void;

    static setLogLevel(nsLogLevel: LogLevels, visualLogLevel: LogLevels): void;

    static setRequiresUserPrivacyConsent(required: boolean): void;
    static provideUserConsent(granted: boolean): void;
    static userProvidedPrivacyConsent(): Promise<boolean>;

    static setExternalUserId(userId: string): void;

    static removeExternalUserId(): void;

    // iOS only
    static registerForPushNotifications(): void;
    static requestPermissions(permissions: ?IOSPermissions): void;
    static promptForPushNotificationsWithUserResponse(
      (result: boolean) => mixed
    ): void;
    static checkPermissions(
      (permissions: $ReadOnly<IOSPermissionsReturn>) => mixed
    ): void;
    static promptForPushNotificationPermissions(
      (result: boolean) => mixed
    ): void;

    // Android only
    static enableVibrate(enable: boolean): void;
    static enableSound(enable: boolean): void;
    static clearOneSignalNotifications(): void;
    static cancelNotification(id: number): void;
    static addTrigger(key: string, value: TriggerValue): void;
    static addTriggers(triggers: { +[key: string]: TriggerValue }): void;
    static removeTriggerForKey(key: string): void;
    static removeTriggersForKeys(keys: $ReadOnlyArray<string>): void;
    static pauseInAppMessages(pause: boolean): void;
    static getTriggerValueForKey(
      key: string,
      handler: (value: ?TriggerValue) => mixed
    ): void;
  }
}
