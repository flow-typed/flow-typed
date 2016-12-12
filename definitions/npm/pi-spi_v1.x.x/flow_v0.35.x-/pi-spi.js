

declare module 'pi-spi' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___PI_SPI' {
			declare function initialize(device: string): ___PI_SPI.SPI

	declare class SPI  {
		clockSpeed(): number;
		clockSpeed(speed: number): void;
		dataMode(): number;
		dataMode(mode: mode): void;
		bitOrder(): number;
		bitOrder(order: order): void;
		write(writebuf: Buffer, cb: (error: Error, data: Buffer) => void): void;
		read(readcount: number, cb: (error: Error, data: Buffer) => void): void;
		transfer(writebuf: Buffer, cb: (error: Error, data: Buffer) => void): void;
		transfer(
		writebuf: Buffer, readcount: number, cb: (error: Error, data: Buffer) => void
	): void;
		close(): void
	}

	
}