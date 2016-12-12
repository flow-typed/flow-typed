import type { BLECentralPluginStatic } from 'npm$namespace$BLECentralPlugin'

declare module 'cordova-plugin-ble-central' {
					
}

declare module 'npm$namespace$BLECentralPlugin' {
		declare interface PeripheralCharacteristic {
		service: string,
		characteristic: string,
		properties: string[],
		descriptors?: any[]
	}

	declare interface PeripheralData {
		name: string,
		id: string,
		rssi: number,
		advertising: ArrayBuffer | any
	}

	declare interface PeripheralDataExtended {
		services: string[],
		characteristics: PeripheralCharacteristic[]
	}

	declare interface StartScanOptions {
		reportDuplicates?: boolean
	}

	declare export interface BLECentralPluginStatic {
		scan(
		services: string[], seconds: number, success: (data: PeripheralData) => any
	): void,
		scan(
		services: string[], seconds: number, success: (data: PeripheralData) => any, failure: () => any
	): void,
		startScan(services: string[], success: (data: PeripheralData) => any): void,
		startScan(
		services: string[], success: (data: PeripheralData) => any, failure: () => any
	): void,
		startScanWithOptions(
		services: string[], options: StartScanOptions, success: (data: PeripheralData) => any
	): void,
		startScanWithOptions(
		services: string[], options: StartScanOptions, success: (data: PeripheralData) => any, failure: () => any
	): void,
		stopScan(): void,
		stopScan(success: () => any): void,
		stopScan(success: () => any, failure: () => any): void,
		connect(
		device_id: string, success: (data: PeripheralDataExtended) => any, failure: () => any
	): void,
		disconnect(device_id: string): void,
		disconnect(device_id: string, success: () => any): void,
		disconnect(device_id: string, success: () => any, failure: () => any): void,
		read(device_id: string, service_uuid: string, characteristic_uuid: string): void,
		read(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: (rawData: ArrayBuffer) => any
	): void,
		read(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: (rawData: ArrayBuffer) => any, failure: () => any
	): void,
		write(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer
	): void,
		write(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer, success: () => any
	): void,
		write(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer, success: () => any, failure: () => any
	): void,
		writeWithoutResponse(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer
	): void,
		writeWithoutResponse(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer, success: () => any
	): void,
		writeWithoutResponse(
		device_id: string, service_uuid: string, characteristic_uuid: string, data: ArrayBuffer, success: () => any, failure: () => any
	): void,
		startNotification(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: (rawData: ArrayBuffer) => any
	): void,
		startNotification(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: (rawData: ArrayBuffer) => any, failure: () => any
	): void,
		stopNotification(device_id: string, service_uuid: string, characteristic_uuid: string): void,
		stopNotification(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: () => any
	): void,
		stopNotification(
		device_id: string, service_uuid: string, characteristic_uuid: string, success: () => any, failure: () => any
	): void,
		isEnabled(success: () => any, failure: () => any): void,
		isConnected(device_id: string, success: () => any): void,
		isConnected(device_id: string, success: () => any, failure: () => any): void,
		startStateNotifications(success: (state: string) => any): void,
		startStateNotifications(success: (state: string) => any, failure: () => any): void,
		stopStateNotifications(): void,
		stopStateNotifications(success: () => any): void,
		stopStateNotifications(success: () => any, failure: () => any): void,
		showBluetoothSettings(): void,
		showBluetoothSettings(success: () => any): void,
		showBluetoothSettings(success: () => any, failure: () => any): void,
		enable(success: () => any, failure: () => any): void,
		readRSSI(device_id: string, success: (rssi: number) => any): void,
		readRSSI(device_id: string, success: (rssi: number) => any, failure: () => any): void
	}

			
}