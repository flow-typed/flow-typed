

declare module 'keypress' {
		declare interface Window {
		keypress: Keypress.Keypress
	}

			
}

declare module 'npm$namespace$Keypress' {
		declare interface ListenerDefaults {
		keys: string,
		prevent_default: boolean,
		prevent_repeat: boolean,
		is_unordered: boolean,
		is_counting: boolean,
		is_exclusive: boolean,
		is_solitary: boolean,
		is_sequence: boolean
	}

	declare interface Combo {
		keys: string,
		on_keydown: (event?: KeyboardEvent, count?: number) => any,
		on_keyup: (event?: KeyboardEvent) => any,
		on_release: (event?: KeyboardEvent) => any,
		this: Element,
		prevent_default: boolean,
		prevent_repeat: boolean,
		is_unordered: boolean,
		is_counting: boolean,
		is_exclusive: boolean,
		is_sequence: boolean,
		is_solitary: boolean
	}

	declare interface Listener {
		new (element: Element, defaults: ListenerDefaults): Listener,
		new (element: Element): Listener,
		new (): Listener,
		simple_combo(
		keys: string, on_keydown_callback: (event?: KeyboardEvent, count?: number) => any
	): void,
		counting_combo(
		keys: string, on_count_callback: (event?: KeyboardEvent, count?: number) => any
	): void,
		sequence_combo(keys: string, callback: (event?: KeyboardEvent, count?: number) => any): void,
		register_combo(combo: Combo): void,
		unregister_combo(combo: Combo): void,
		unregister_combo(keys: string): void,
		register_many(combos: Combo[]): void,
		unregister_many(combos: Combo[]): void,
		unregister_many(keys: string[]): void,
		get_registered_combos(): Combo[],
		reset(): void,
		listen(): void,
		stop_listening(): void
	}

	declare interface Keypress {
		Listener: Listener
	}

			
}