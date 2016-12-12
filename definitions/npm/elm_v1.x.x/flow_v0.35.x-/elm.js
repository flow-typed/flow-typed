

declare module 'elm' {
		declare interface Elm {
		embed<P>(
		elmModule: ElmModule<P>, element: Node, initialValues?: Object
	): ElmComponent<P>,
		fullscreen<P>(elmModule: ElmModule<P>, initialValues?: Object): ElmComponent<P>,
		worker<P>(elmModule: ElmModule<P>, initialValues?: Object): ElmComponent<P>
	}

	declare interface ElmModule<P> {
		
	}

	declare interface ElmComponent<P> {
		ports: P
	}

	declare interface PortToElm<V> {
		send(value: V): void
	}

	declare interface PortFromElm<V> {
		subscribe(handler: (value: V) => void): void,
		unsubscribe(handler: (value: V) => void): void
	}

			
}