

declare module 'webmidi' {
		declare interface Navigator {
		requestMIDIAccess(options?: WebMidi.MIDIOptions): Promise<WebMidi.MIDIAccess>
	}

			
}

declare module 'npm$namespace$WebMidi' {
	declare export type MIDIInputMap = Map<string, MIDIInput>;

	declare export type MIDIOutputMap = Map<string, MIDIOutput>;

	declare export type MIDIPortType = "input" | "output";

	declare export type MIDIPortDeviceState = "disconnected" | "connected";

	declare export type MIDIPortConnectionState = "open" | "closed" | "pending";

	declare export interface MIDIOptions {
		sysex: boolean
	}

	declare export interface MIDIAccess {
		inputs: MIDIInputMap,
		outputs: MIDIOutputMap,
		onstatechange: (e: MIDIConnectionEvent) => void,
		sysexEnabled: boolean
	}

	declare export interface MIDIPort {
		id: string,
		manufacturer?: string,
		name?: string,
		type: MIDIPortType,
		version?: string,
		state: MIDIPortDeviceState,
		connection: MIDIPortConnectionState,
		onstatechange: (e: MIDIConnectionEvent) => void,
		open(): Promise<MIDIPort>,
		close(): Promise<MIDIPort>
	}

	declare export interface MIDIInput {
		onmidimessage: (e: MIDIMessageEvent) => void
	}

	declare export interface MIDIOutput {
		send(data: number[], timestamp?: number): void,
		clear(): void
	}

	declare export interface MIDIMessageEvent {
		receivedTime: number,
		data: Uint8Array
	}

	declare export interface MIDIMessageEventInit {
		receivedTime: number,
		data: Uint8Array
	}

	declare export interface MIDIConnectionEvent {
		port: MIDIPort
	}

	declare export interface MIDIConnectionEventInit {
		port: MIDIPort
	}

			
}