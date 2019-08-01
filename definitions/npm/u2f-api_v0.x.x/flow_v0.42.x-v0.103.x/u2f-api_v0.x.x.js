//@flow

declare module "u2f-api" {
  declare type CANCELLED = -1;
  declare type OK = 0;
  declare type OTHER_ERROR = 1;
  declare type BAD_REQUEST = 2;
  declare type CONFIGURATION_UNSUPPORTED = 3;
  declare type DEVICE_INELIGIBLE = 4;
  declare type TIMEOUT = 5;
  declare type ErrorCode =
    | CANCELLED
    | OK
    | OTHER_ERROR
    | BAD_REQUEST
    | CONFIGURATION_UNSUPPORTED
    | DEVICE_INELIGIBLE
    | TIMEOUT;

  declare type Transport = "bt" | "ble" | "nfc" | "usb";

  declare type Transports = Array<Transport>;

  declare type RegisteredKey = {
    version?: string,
    keyHandle?: string,
    transports?: ?Transports,
    appId?: ?string
  };

  declare type RegisterRequest = {
    version?: string,
    challenge?: string
  };

  declare type RegisterResponse = {
    version?: string,
    registrationData?: string,
    clientData?: string,
    errorCode?: ?ErrorCode,
    errorMessage?: ?string
  };

  declare type SignResponse = {
    keyHandle?: string,
    signatureData?: string,
    clientData?: string,
    errorCode?: ?ErrorCode,
    errorMessage?: ?string
  };

  declare type CancellablePromise<T> = Promise<T> & {
    cancel(): void
  };

  declare function isSupported(): CancellablePromise<boolean>;

  declare function ensureSupport(): CancellablePromise<void>;

  declare function register(
    registerRequests: RegisterRequest | RegisterRequest[],
    signRequests?: RegisteredKey | RegisteredKey[],
    timeout?: number
  ): CancellablePromise<RegisterResponse>;

  declare function sign(
    signRequests: RegisteredKey | RegisteredKey[],
    timeout?: number
  ): CancellablePromise<SignResponse>;
}
