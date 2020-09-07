declare module "react-native-fingerprint-scanner" {
  // https://github.com/hieuvp/react-native-fingerprint-scanner/blob/ac332adedc99ba286d2cf08d6fccd0130ccbd21f/src/createError.js#L13
  declare export type ErrorsTypes =
    | "AuthenticationNotMatch"
    | "AuthenticationFailed"
    | "UserCancel"
    | "UserFallback"
    | "SystemCancel"
    | "PasscodeNotSet"
    | "FingerprintScannerNotAvailable"
    | "FingerprintScannerNotEnrolled"
    | "FingerprintScannerUnknownError"
    | "FingerprintScannerNotSupported"
    | "DeviceLocked"
    | string;

  declare export class FingerprintScannerError extends Error {
    name: ErrorsTypes;
  }

  declare export type AuthenticateParamsIOS = {|
    description?: string,
    fallbackEnabled?: boolean
  |};

  declare export type AuthenticateParamsAndroid = {|
    onAttempt?: (error: FingerprintScannerError) => any
  |};

  declare var authenticateFn: {
    (AuthenticateParamsIOS): Promise<true>,
    (AuthenticateParamsAndroid): Promise<true>,
    ...
  };

  declare var releaseFn: { (): void, ... };

  declare export type BiometricsTypes = "Touch ID" | "Face ID" | "Fingerprint";

  declare var isSensorAvailableFn: { (): Promise<BiometricsTypes>, ... };

  declare export default {|
    authenticate: typeof authenticateFn,
    release: typeof releaseFn,
    isSensorAvailable: typeof isSensorAvailableFn
  |};
}
