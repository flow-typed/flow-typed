declare module 'expo-secure-store' {
  // Types
  // `KA$` is Keychain Accessible namespace
  declare export opaque type KA$AFTER_FIRST_UNLOCK: number;
  declare export opaque type KA$AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: number;
  declare export opaque type KA$ALWAYS: number;
  declare export opaque type KA$WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: number;
  declare export opaque type KA$ALWAYS_THIS_DEVICE_ONLY: number;
  declare export opaque type KA$WHEN_UNLOCKED: number;
  declare export opaque type KA$WHEN_UNLOCKED_THIS_DEVICE_ONLY: number;
  declare export type CommonSecureStoreOptions = {|
    keychainService?: string,
  |};
  declare export type SecureStoreOptions = {|
    ...CommonSecureStoreOptions,
    keychainAccessible?:
      | KA$AFTER_FIRST_UNLOCK
      | KA$AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY
      | KA$ALWAYS
      | KA$WHEN_PASSCODE_SET_THIS_DEVICE_ONLY
      | KA$ALWAYS_THIS_DEVICE_ONLY
      | KA$WHEN_UNLOCKED
      | KA$WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  |};

  // Variables
  declare export var AFTER_FIRST_UNLOCK: KA$AFTER_FIRST_UNLOCK;
  declare export var AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: KA$AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY;
  declare export var ALWAYS: KA$ALWAYS;
  declare export var WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: KA$WHEN_PASSCODE_SET_THIS_DEVICE_ONLY;
  declare export var ALWAYS_THIS_DEVICE_ONLY: KA$ALWAYS_THIS_DEVICE_ONLY;
  declare export var WHEN_UNLOCKED: KA$WHEN_UNLOCKED;
  declare export var WHEN_UNLOCKED_THIS_DEVICE_ONLY: KA$WHEN_UNLOCKED_THIS_DEVICE_ONLY;

  declare export function deleteItemAsync(
    key: string,
    options?: CommonSecureStoreOptions
  ): Promise<void>;

  declare export function getItemAsync(
    key: string,
    options?: CommonSecureStoreOptions
  ): Promise<string | null>;

  declare export function setItemAsync(
    key: string,
    value: string,
    options?: SecureStoreOptions
  ): Promise<void>;
}
