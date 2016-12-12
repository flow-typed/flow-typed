

declare module 'waa' {
		declare interface AudioContextConstructor {
		new (): AudioContext
	}

	declare interface Window {
		AudioContext: AudioContextConstructor
	}

	declare interface AudioContext {
		createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode
	}

	declare interface MediaStreamAudioSourceNode {
		
	}

	declare interface MediaStreamAudioDestinationNode {
		stream: MediaStream
	}

	declare interface AudioBuffer {
		copyFromChannel(
		destination: Float32Array, channelNumber: number, startInChannel?: number
	): void,
		copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void
	}

	declare interface AudioNode {
		disconnect(destination: AudioNode): void
	}

	declare interface AudioContext {
		suspend(): Promise<void>,
		resume(): Promise<void>,
		close(): Promise<void>,
		createMediaStreamDestination(): MediaStreamAudioDestinationNode
	}

			
}