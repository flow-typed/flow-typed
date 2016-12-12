

declare module 'bootstrap-switch' {
		declare interface JQuery {
		bootstrapSwitch(): JQuery,
		bootstrapSwitch(options: BootstrapSwitch.BootstrapSwitchOptions): JQuery,
		bootstrapSwitch(method: string): JQuery,
		bootstrapSwitch(method: string, param: any): JQuery,
		bootstrapSwitch(method: string, param1: any, param2: any): JQuery,
		off(
		events: "init.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any
	): JQuery,
		off(
		events: "init.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any
	): JQuery,
		off(
		events: "switchChange.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any
	): JQuery,
		off(
		events: "switchChange.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any
	): JQuery,
		on(
		events: "init.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any
	): JQuery,
		on(
		events: "init.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any
	): JQuery,
		on(
		events: "switchChange.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any
	): JQuery,
		on(
		events: "switchChange.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any
	): JQuery
	}

			
}

declare module 'npm$namespace$BootstrapSwitch' {
		declare interface BootstrapSwitchChangeEventObject {
		state: boolean
	}

	declare interface BootstrapSwitchEventObject {
		
	}

	declare interface BootstrapSwitchOptions {
		state?: boolean,
		size?: string,
		animate?: boolean,
		disabled?: boolean,
		readonly?: boolean,
		indeterminate?: boolean,
		invers?: boolean,
		radioAllOff?: boolean,
		onColor?: string,
		offColor?: string,
		onText?: string,
		offText?: string,
		labelText?: string,
		handleWidth?: string,
		labelWidth?: string,
		baseClass?: string,
		wrapperClass?: string,
		onInit?: any,
		onSwitchChange?: any
	}

	declare interface Switch {
		toggleAnimate(): JQuery,
		toggleDisabled(): JQuery,
		toggleReadonly(): JQuery,
		toggleIndeterminate(): JQuery,
		toggleInverse(): JQuery,
		destroy(): JQuery,
		state(): boolean,
		state(value: any): JQuery,
		state(value: any, skip: boolean): JQuery,
		toggleState(skip?: boolean): JQuery,
		radioAllOff(): boolean,
		radioAllOff(state: boolean): JQuery,
		size(): string,
		size(size: string): JQuery,
		animate(): boolean,
		animate(state: boolean): JQuery,
		disabled(): boolean,
		disabled(state: boolean): JQuery,
		toggleDisabled(): JQuery,
		readonly(): boolean,
		readonly(state: boolean): JQuery,
		toggleReadOnly(): JQuery,
		onColor(): string,
		onColor(color: string): JQuery,
		offColor(): string,
		offColor(color: string): JQuery,
		onText(): string,
		onText(text: string): JQuery,
		offText(): string,
		offText(text: string): JQuery,
		labelText(): string,
		labelText(text: string): JQuery,
		baseClass(): string,
		baseClass(text: string): JQuery,
		wrapperClass(): string,
		wrapperClass(text: string): JQuery
	}

			
}