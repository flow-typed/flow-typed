import type { Standalone, ChunkerStatic, UnchunkerStatic } from 'npm$namespace$chunkedDc'

declare module 'chunked-dc' {
					
}

declare module 'npm$namespace$chunkedDc' {
	declare type MessageListener = (message: Uint8Array, context?: any) => void;

	declare interface CommonStatic {
		HEADER_LENGTH: number
	}

	declare interface Chunker {
		hasNext: boolean,
		next(): IteratorResult<Uint8Array>,
		undefined(): IterableIterator<Uint8Array>
	}

	declare interface ChunkerStatic {
		new (id: number, message: Uint8Array, chunkSize: number): Chunker
	}

	declare interface Unchunker {
		onMessage: MessageListener,
		add(chunk: ArrayBuffer, context?: any): void,
		gc(maxAge: number): number
	}

	declare interface UnchunkerStatic {
		new (): Unchunker
	}

	declare interface Standalone {
		Chunker: ChunkerStatic,
		Unchunker: UnchunkerStatic
	}

			
}