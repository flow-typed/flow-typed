declare module 'expo-permissions' {
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
