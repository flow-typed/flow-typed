declare module 'expo-constants' {
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
    releaseChannel?: string,
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
