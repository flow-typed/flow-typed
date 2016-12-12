

declare module 'webspeechapi' {
		declare interface SpeechRecognition {
		grammars: SpeechGrammarList,
		lang: string,
		continuous: boolean,
		interimResults: boolean,
		maxAlternatives: number,
		serviceURI: string,
		start(): void,
		stop(): void,
		abort(): void,
		onaudiostart: (ev: Event) => any,
		onsoundstart: (ev: Event) => any,
		onspeechstart: (ev: Event) => any,
		onspeechend: (ev: Event) => any,
		onsoundend: (ev: Event) => any,
		onresult: (ev: SpeechRecognitionEvent) => any,
		onnomatch: (ev: SpeechRecognitionEvent) => any,
		onerror: (ev: SpeechRecognitionError) => any,
		onstart: (ev: Event) => any,
		onend: (ev: Event) => any
	}

	declare interface SpeechRecognitionStatic {
		prototype: SpeechRecognition,
		new (): SpeechRecognition
	}

	declare interface SpeechRecognitionError {
		error: string,
		message: string
	}

	declare interface SpeechRecognitionAlternative {
		transcript: string,
		confidence: number
	}

	declare interface SpeechRecognitionResult {
		length: number,
		item(index: number): SpeechRecognitionAlternative,
		[index: number]: SpeechRecognitionAlternative,
		isFinal: boolean
	}

	declare interface SpeechRecognitionResultList {
		length: number,
		item(index: number): SpeechRecognitionResult,
		[index: number]: SpeechRecognitionResult
	}

	declare interface SpeechRecognitionEvent {
		resultIndex: number,
		results: SpeechRecognitionResultList,
		interpretation: any,
		emma: Document
	}

	declare interface SpeechGrammar {
		src: string,
		weight: number
	}

	declare interface SpeechGrammarStatic {
		prototype: SpeechGrammar,
		new (): SpeechGrammar
	}

	declare interface SpeechGrammarList {
		length: number,
		item(index: number): SpeechGrammar,
		[index: number]: SpeechGrammar,
		addFromURI(src: string, weight: number): void,
		addFromString(string: string, weight: number): void
	}

	declare interface SpeechGrammarListStatic {
		prototype: SpeechGrammarList,
		new (): SpeechGrammarList
	}

	declare interface SpeechSynthesis {
		pending: boolean,
		speaking: boolean,
		paused: boolean,
		onvoiceschanged: (ev: Event) => any,
		speak(utterance: SpeechSynthesisUtterance): void,
		cancel(): void,
		pause(): void,
		resume(): void,
		getVoices(): SpeechSynthesisVoice[]
	}

	declare interface SpeechSynthesisGetter {
		speechSynthesis: SpeechSynthesis
	}

	declare interface Window {
		
	}

	declare interface SpeechSynthesisUtterance {
		text: string,
		lang: string,
		voice: SpeechSynthesisVoice,
		volume: number,
		rate: number,
		pitch: number,
		onstart: (ev: SpeechSynthesisEvent) => any,
		onend: (ev: SpeechSynthesisEvent) => any,
		onerror: (ev: SpeechSynthesisErrorEvent) => any,
		onpause: (ev: SpeechSynthesisEvent) => any,
		onresume: (ev: SpeechSynthesisEvent) => any,
		onmark: (ev: SpeechSynthesisEvent) => any,
		onboundary: (ev: SpeechSynthesisEvent) => any
	}

	declare interface SpeechSynthesisUtteranceStatic {
		prototype: SpeechSynthesisUtterance,
		new (): SpeechSynthesisUtterance,
		new (text: string): SpeechSynthesisUtterance
	}

	declare interface SpeechSynthesisEvent {
		utterance: SpeechSynthesisUtterance,
		charIndex: number,
		elapsedTime: number,
		name: string
	}

	declare interface SpeechSynthesisErrorEvent {
		error: string
	}

	declare interface SpeechSynthesisVoice {
		voiceURI: string,
		name: string,
		lang: string,
		localService: boolean,
		default: boolean
	}

			
}