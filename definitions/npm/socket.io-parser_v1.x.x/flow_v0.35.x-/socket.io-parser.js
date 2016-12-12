

declare module 'socket.io-parser' {
					declare module.exports: undefined


}

declare module 'Parser' {
	declare type Packet = {
		type: number,
		data: any,
		id: number
	};

	declare type EncodedPacket = string | Buffer | ArrayBuffer | Blob;

			declare class Encoder  {
		encode(packet: Packet, callback: (encodedPackets: EncodedPacket[]) => void): void
	}

	declare class Decoder  {
		on(event: string, callback: (decodedPacket: Packet) => void): void;
		add(encodedPacket: EncodedPacket): void;
		destroy(): void
	}

	
}