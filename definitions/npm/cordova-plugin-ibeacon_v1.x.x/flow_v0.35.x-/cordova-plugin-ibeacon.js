

declare module 'cordova-plugin-ibeacon' {
		declare interface CordovaPlugins {
		locationManager: BeaconPlugin.LocationManager
	}

			
}

declare module 'npm$namespace$BeaconPlugin' {
		declare export interface LocationManager {
		delegate: Delegate,
		BeaconRegion: BeaconRegion,
		Region: Region,
		onDomDelegateReady(): Q.Promise<void>,
		startMonitoringForRegion(region: Region): Q.Promise<void>,
		stopMonitoringForRegion(region: Region): Q.Promise<void>,
		requestStateForRegion(region: Region): Q.Promise<void>,
		startRangingBeaconsInRegion(region: Region): Q.Promise<void>,
		stopRangingBeaconsInRegion(region: Region): Q.Promise<void>,
		getAuthorizationStatus(): Q.Promise<PluginResult>,
		requestWhenInUseAuthorization(): Q.Promise<void>,
		requestAlwaysAuthorization(): Q.Promise<void>,
		getMonitoredRegions(): Q.Promise<Region[]>,
		getRangedRegions(): Q.Promise<Region[]>,
		isRangingAvailable(): Q.Promise<boolean>,
		isMonitoringAvailableForClass(region: Region): Q.Promise<boolean>,
		startAdvertising(region: Region, measuredPower: boolean): Q.Promise<void>,
		stopAdvertising(): Q.Promise<void>,
		isAdvertisingAvailable(): Q.Promise<boolean>,
		isAdvertising(): Q.Promise<boolean>,
		disableDebugLogs(): Q.Promise<void>,
		enableDebugNotifications(): Q.Promise<void>,
		disableDebugNotifications(): Q.Promise<void>,
		enableDebugLogs(): Q.Promise<void>,
		isBluetoothEnabled(): Q.Promise<boolean>,
		enableBluetooth(): Q.Promise<void>,
		disableBluetooth(): Q.Promise<void>,
		appendToDeviceLog(message: string): Q.Promise<string>
	}

	declare export interface PluginResult {
		eventType: string,
		region: Region,
		beacons: Beacon[],
		authorizationStatus: string,
		state: string,
		error: string
	}

	declare export interface Delegate {
		didDetermineStateForRegion(pluginResult: PluginResult): void,
		didStartMonitoringForRegion(pluginResult: PluginResult): void,
		didExitRegion(pluginResult: PluginResult): void,
		didEnterRegion(pluginResult: PluginResult): void,
		didRangeBeaconsInRegion(pluginResult: PluginResult): void,
		peripheralManagerDidStartAdvertising(pluginResult: PluginResult): void,
		peripheralManagerDidUpdateState(pluginResult: PluginResult): void,
		didChangeAuthorizationStatus(authorizationStatus: string): void,
		monitoringDidFailForRegionWithError(pluginResult: PluginResult): void
	}

	declare export interface Region {
		identifier: string,
		new (identifier: string): Region
	}

	declare export interface BeaconRegion {
		uuid: string,
		major: string,
		minor: string,
		notifyEntryStateOnDisplay: boolean,
		new (
		identifier: string, uuid: string, major?: number, minor?: number, notifyEntryStateOnDisplay?: boolean
	): BeaconRegion
	}

	declare export interface CircularRegion {
		latitude: number,
		longitude: number,
		radius: number,
		new (
		identifier: string, latitude: number, longitude: number, radius: number
	): CircularRegion
	}

	declare export interface Beacon {
		uuid: string,
		major: string,
		minor: string,
		proximity: string,
		tx: number,
		rssi: number,
		accuracy: number
	}

			
}