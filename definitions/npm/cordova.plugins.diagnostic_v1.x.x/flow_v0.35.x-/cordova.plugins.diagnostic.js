

declare module 'cordova.plugins.diagnostic' {
		declare interface Diagnostic {
		permission?: any,
		permissionGroups?: any,
		permissionStatus?: any,
		locationAuthorizationMode?: any,
		locationMode?: any,
		bluetoothState?: any,
		isLocationAvailable: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isWifiAvailable: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isCameraAvailable: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isBluetoothAvailable: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		switchToLocationSettings?: () => void,
		switchToMobileDataSettings?: () => void,
		switchToBluetoothSettings?: () => void,
		switchToWifiSettings?: () => void,
		isWifiEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		setWifiState?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void, state: boolean
	) => void,
		setBluetoothState?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void, state: boolean
	) => void,
		isLocationEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isLocationAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getLocationAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestLocationAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void, mode?: string
	) => void,
		isCameraPresent?: (
		successCallback: (present: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isCameraAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getCameraAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestCameraAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		isMicrophoneAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getMicrophoneAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestMicrophoneAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		isContactsAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getContactsAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestContactsAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		isCalendarAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getCalendarAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestCalendarAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		switchToSettings?: (successCallback: () => void, errorCallback: (error: string) => void) => void,
		getBluetoothState?: (
		successCallback: (state: string) => void, errorCallback: (error: string) => void
	) => void,
		registerBluetoothStateChangeHandler?: (successCallback: (state: string) => void) => void,
		registerLocationStateChangeHandler?: (successCallback: (state: string) => void) => void,
		isGpsLocationAvailable?: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isGpsLocationEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isNetworkLocationAvailable?: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isNetworkLocationEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getLocationMode?: (
		successCallback: (mode: string) => void, errorCallback: (error: string) => void
	) => void,
		getPermissionAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void, permission: string
	) => void,
		getPermissionsAuthorizationStatus?: (
		successCallback: (status: string[]) => void, errorCallback: (error: string) => void, permissions: string[]
	) => void,
		requestRuntimePermission?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void, permission: string
	) => void,
		requestRuntimePermissions?: (
		successCallback: (status: string[]) => void, errorCallback: (error: string) => void, permissions: string[]
	) => void,
		isRequestingPermission?: () => boolean,
		registerPermissionRequestCompleteHandler?: (successCallback: (statuses: any) => void) => void,
		isBluetoothEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		hasBluetoothSupport?: (
		successCallback: (supported: boolean) => void, errorCallback: (error: string) => void
	) => void,
		hasBluetoothLESupport?: (
		successCallback: (supported: boolean) => void, errorCallback: (error: string) => void
	) => void,
		hasBluetoothLEPeripheralSupport?: (
		successCallback: (supported: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isCameraRollAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getCameraRollAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestCameraRollAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		isRemoteNotificationsEnabled?: (
		successCallback: (enabled: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isRegisteredForRemoteNotifications?: (
		successCallback: (registered: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getRemoteNotificationTypes?: (
		successCallback: (types: any) => void, errorCallback: (error: string) => void
	) => void,
		isRemindersAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getRemindersAuthorizationStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestRemindersAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		isBackgroundRefreshAuthorized?: (
		successCallback: (authorized: boolean) => void, errorCallback: (error: string) => void
	) => void,
		getBackgroundRefreshStatus?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void,
		requestBluetoothAuthorization?: (successCallback: () => void, errorCallback: (error: string) => void) => void,
		isMotionAvailable?: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		isMotionRequestOutcomeAvailable?: (
		successCallback: (available: boolean) => void, errorCallback: (error: string) => void
	) => void,
		requestAndCheckMotionAuthorization?: (
		successCallback: (status: string) => void, errorCallback: (error: string) => void
	) => void
	}

	declare interface CordovaPlugins {
		diagnostic: Diagnostic
	}

			
}