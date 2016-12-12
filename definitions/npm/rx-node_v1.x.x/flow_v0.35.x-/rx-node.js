

declare module 'rx-node' {
					declare module.exports: undefined


}

declare module 'npm$namespace$RxNode' {
		declare export interface PublishableEventEmitter {
		publish(): void
	}

	declare function toEventEmitter<T>(
		observable: Rx.Observable<T>, eventName: string
	): RxNode.PublishableEventEmitter

	declare function fromStream<T>(
		stream: NodeJS.ReadableStream, finishEventName?: string, dataEventName?: string
	): Rx.Observable<T>

	declare function fromReadableStream<T>(stream: NodeJS.ReadableStream, dataEventName?: string): Rx.Observable<T>

	declare function fromReadLineStream<T>(stream: NodeJS.ReadableStream): Rx.Observable<T>

	declare function fromWritableStream<T>(stream: NodeJS.WritableStream): Rx.Observable<T>

	declare function fromTransformStream<T>(stream: NodeJS.ReadWriteStream, dataEventName?: string): Rx.Observable<T>

	declare function writeToStream<T>(
		observable: Rx.Observable<T>, stream: NodeJS.WritableStream, encoding: string
	): Rx.Disposable

		
}