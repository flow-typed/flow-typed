

declare module 'BatteryStatus' {
		declare interface Window {
		onbatterystatus: (type: BatteryStatusEvent) => void,
		onbatterycritical: (type: BatteryStatusEvent) => void,
		onbatterylow: (type: BatteryStatusEvent) => void,
		addEventListener(
		type: "batterystatus", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "batterycritical", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "batterylow", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		addEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(
		type: "batterystatus", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		removeEventListener(
		type: "batterycritical", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		removeEventListener(
		type: "batterylow", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean
	): void,
		removeEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void
	}

	declare interface BatteryStatusEvent {
		level: number,
		isPlugged: boolean
	}

			
}