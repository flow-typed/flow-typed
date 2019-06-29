declare module 'react-native-unimodules/@@expo-asset' {
  declare export type AssetMetadata = {|
    hash: string,
    name: string,
    type: string,
    httpServerLocation: string,
    scales: Array<number>,

    width?: number,
    height?: number,
    uri?: string,
    fileHashes?: Array<string>,
    fileUris?: Array<string>,
  |};

  declare export type AssetDescriptor = {|
    name: string,
    type: string,
    uri: string,

    hash?: ?string,
    width?: ?number,
    height?: ?number,
  |};

  declare export class Asset {
    constructor(options: AssetDescriptor): Asset;
    downloadAsync(): Promise<void>;

    name: string;
    type: string;
    uri: string;
    downloaded: boolean;
    downloading: boolean;
    hash: ?string;
    height: ?number;
    width: ?number;
    localUri: ?string;

    static fromMetadata(meta: AssetMetadata): Asset;
    static fromModule(virtualAssetModule: number | string): Asset;
    static fromURI(uri: string): Asset;
    // https://github.com/facebook/react-native/blob/654868da336ab34ea851cada943492932009ec5d/Libraries/Image/ImageSource.js#L87-L91
    // number === require('a.png')
    static loadAsync(moduleId: number | Array<number>): Promise<Array<void>>;
  }
}

declare module 'react-native-unimodules/@@expo-constants' {
  declare export type AppOwnership = 'standalone' | 'expo' | 'guest';

  declare export type UserInterfaceIdiom = 'handset' | 'tablet' | 'unsupported';

  declare export type IOSManifest = {
    buildNumber: string,
    platform: string,
    model: string,
    userInterfaceIdiom: UserInterfaceIdiom,
    systemVersion: string,
  };

  declare export type AndroidManifest = {
    versionCode: number,
  };

  declare export type WebManifest = {};

  declare export type AppManifest = {
    name?: string,
    description?: string,
    slug?: string,
    sdkVersion?: string,
    version?: string,
    orientation?: string,
    primaryColor?: string,
    icon?: string,
    notification?: {
      icon?: string,
      color?: string,
    },
    loading?: {
      icon?: string,
    },
    entryPoint?: string,
    packagerOpts?: {
      hostType?: string,
      dev?: boolean,
      strict?: boolean,
      minify?: boolean,
      urlType?: string,
      urlRandomness?: string,
      lanType?: string,
    },
    xde?: boolean,
    developer?: {
      tool?: string,
    },
    bundleUrl: string,
    debuggerHost?: string,
    mainModuleName?: string,
    logUrl?: string,
  };

  declare export type PlatformManifest = {
    ios?: IOSManifest,
    android?: AndroidManifest,
    web?: WebManifest,
    detach?: {
      scheme?: string,
    },
    logUrl?: string,
    scheme?: string,
    hostUri?: string,
    developer?: string,
  };

  declare export type NativeConstants = {
    debugMode: boolean,
    deviceName?: string,
    deviceYearClass: number | null,
    experienceUrl: string,
    expoRuntimeVersion: string,
    expoVersion: string,
    isDetached?: boolean,
    intentUri?: string,
    installationId: string,
    isDevice: boolean,
    isHeadless: boolean,
    linkingUri: string,
    sessionId: string,
    statusBarHeight: number,
    systemVersion?: number,
    systemFonts: Array<string>,
    appOwnership: AppOwnership,
    manifest: AppManifest,
    platform?: PlatformManifest,
    getWebViewUserAgentAsync: () => Promise<string | null>,
  };

  declare export default {
    deviceId?: string,
    linkingUrl?: string,
  } & NativeConstants;
}

declare module 'react-native-unimodules/@@expo-file-system' {
  // Types
  declare export type DownloadOptions = {|
    md5?: boolean,
    cache?: boolean,
    headers?: {
      [name: string]: string,
    },
  |};

  declare export type DownloadResult = {|
    uri: string,
    status: number,
    headers: {
      [name: string]: string,
    },
    md5?: string,
  |};

  declare export type DownloadProgressCallback = (
    data: DownloadProgressData
  ) => void;

  declare export type DownloadProgressData = {|
    totalBytesWritten: number,
    totalBytesExpectedToWrite: number,
  |};

  declare export type DownloadPauseState = {|
    url: string,
    fileUri: string,
    options: DownloadOptions,
    resumeData?: string,
  |};

  declare export type FileInfo =
    | {|
        exists: true,
        uri: string,
        size: number,
        isDirectory: boolean,
        modificationTime: number,
        md5?: string,
      |}
    | {|
        exists: false,
        uri: string,
        size: void,
        isDirectory: false,
        modificationTime: void,
        md5: void,
      |};

  declare export type EncodingType = 'utf8' | 'base64';

  declare export type GetInfoOptions = {|
    md5?: boolean,
    cache?: boolean,
  |};

  declare export type ReadingOptions = {|
    encoding?: EncodingType,
    position?: number,
    length?: number,
  |};

  declare export type WritingOptions = {|
    encoding?: EncodingType,
  |};

  declare export type FromToDescriptor = {|
    from: string,
    to: string,
  |};

  // Variables
  declare export var documentDirectory: string;

  declare export var cacheDirectory: string;

  declare export var bundledAssets: string | void;

  declare export var bundleDirectory: string;

  declare export function getInfoAsync(
    fileUri: string,
    options?: GetInfoOptions
  ): Promise<FileInfo>;

  declare export function readAsStringAsync(
    fileUri: string,
    options?: ReadingOptions
  ): Promise<string>;

  declare export function writeAsStringAsync(
    fileUri: string,
    contents: string,
    options?: WritingOptions
  ): Promise<void>;

  declare export function deleteAsync(
    fileUri: string,
    options?: {|
      idempotent?: boolean,
    |}
  ): Promise<void>;

  declare export function moveAsync(options: FromToDescriptor): Promise<void>;

  declare export function copyAsync(options: FromToDescriptor): Promise<void>;

  declare export function makeDirectoryAsync(
    fileUri: string,
    options?: {|
      intermediates?: boolean,
    |}
  ): Promise<void>;

  declare export function readDirectoryAsync(
    fileUri: string
  ): Promise<Array<string>>;

  declare export function downloadAsync(
    uri: string,
    fileUri: string,
    options?: DownloadOptions
  ): Promise<DownloadResult>;

  declare export function createDownloadResumable(
    uri: string,
    fileUri: string,
    options?: DownloadOptions,
    callback?: DownloadProgressCallback,
    resumeData?: string
  ): DownloadResumable;

  declare export class DownloadResumable {
    constructor(
      url: string,
      fileUri: string,
      options?: DownloadOptions,
      callback?: DownloadProgressCallback,
      resumeData?: string
    ): DownloadResumable;
    downloadAsync(): Promise<DownloadResult | void>;
    pauseAsync(): Promise<DownloadPauseState>;
    resumeAsync(): Promise<DownloadResult | void>;
    savable(): DownloadPauseState;
  }
}

declare module 'react-native-unimodules/@@expo-permissions' {
  declare export type PermissionResponse = $ReadOnly<{|
    status: PermissionStatus,
    expires: PermissionExpiration,
    permissions: PermissionMap,
  |}>;

  declare export type PermissionMap = $ReadOnly<{|
    [permissionType: PermissionType]: PermissionInfo,
  |}>;

  declare export type PermissionInfo = $ReadOnly<{|
    status: PermissionStatus,
    expires: PermissionExpiration,
    ios?: PermissionDetailsLocationIOS,
    android?: PermissionDetailsLocationAndroid,
  |}>;

  declare export type PermissionStatus = 'undetermined' | 'granted' | 'denied';

  declare export type PermissionExpiration = 'never' | number;

  declare export type PermissionDetailsLocationIOS = $ReadOnly<{|
    scope: 'whenInUse' | 'always',
  |}>;

  declare export type PermissionDetailsLocationAndroid = $ReadOnly<{|
    scope: 'fine' | 'coarse' | 'none',
  |}>;

  declare export var CAMERA: 'camera';

  declare export var CAMERA_ROLL: 'cameraRoll';

  declare export var AUDIO_RECORDING: 'audioRecording';

  declare export var LOCATION: 'location';

  declare export var USER_FACING_NOTIFICATIONS: 'userFacingNotifications';

  declare export var NOTIFICATIONS: 'notifications';

  declare export var CONTACTS: 'contacts';

  declare export var CALENDAR: 'calendar';

  declare export var REMINDERS: 'reminders';

  declare export var SYSTEM_BRIGHTNESS: 'systemBrightness';

  declare export type PermissionType =
    | typeof CAMERA
    | typeof CAMERA_ROLL
    | typeof AUDIO_RECORDING
    | typeof LOCATION
    | typeof USER_FACING_NOTIFICATIONS
    | typeof NOTIFICATIONS
    | typeof CONTACTS
    | typeof CALENDAR
    | typeof REMINDERS
    | typeof SYSTEM_BRIGHTNESS;

  declare export function getAsync(
    ...types: Array<PermissionType>
  ): Promise<PermissionResponse>;

  declare export function askAsync(
    ...types: Array<PermissionType>
  ): Promise<PermissionResponse>;
}

declare module 'react-native-unimodules' {
  declare export { Asset } from 'react-native-unimodules/@@expo-asset';

  declare export {
    default as Constants,
  } from 'react-native-unimodules/@@expo-constants';

  declare export var FileSystem: $Exports<
    'react-native-unimodules/@@expo-file-system'
  >;

  declare export var Permissions: $Exports<
    'react-native-unimodules/@@expo-permissions'
  >;
}
