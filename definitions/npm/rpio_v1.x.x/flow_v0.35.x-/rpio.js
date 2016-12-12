

declare module 'rpio' {
		declare interface Rpio {
		init(options: RPIO.Options): void,
		open(pin: number, mode: number, options?: number): void,
		mode(pin: number, mode: number): void,
		read(pin: number): number,
		readbuf(pin: number, buffer: Buffer, length?: number): void,
		write(pin: number, value: number): void,
		writebuf(pin: number, buffer: Buffer, length?: number): void,
		readpad(group: number): number,
		writepad(group: number, control: number): void,
		pud(pin: number, state: number): void,
		poll(pin: number, cb: RPIO.CallbackFunction, direction?: number): void,
		close(pin: number): void,
		i2cBegin(): void,
		i2cSetSlaveAddress(address: number): void,
		i2cSetBaudRate(baudRate: number): void,
		i2cRead(buffer: Buffer, length?: number): void,
		i2cWrite(biffer: Buffer, length?: number): void,
		i2cSetClockDivider(clockDivider: number): void,
		i2cEnd(): void,
		pwmSetClockDivider(clockDivider: number): void,
		pwmSetRange(pin: number, range: number): void,
		pwmSetData(pin: number, data: number): void,
		spiBegin(): void,
		spiChipSelect(cePin: number): void,
		spiSetCSPolarity(cePin: number, polarity: number): void,
		spiSetClockDivider(clockDivider: number): void,
		spiTransfer(txBuffer: Buffer, rxBuffer: Buffer, txLength: number): void,
		spiWrite(txBuffer: Buffer, txLength: number): void,
		spiEnd(): void,
		sleep(n: number): void,
		msleep(n: number): void,
		usleep(n: number): void,
		HIGH: number,
		LOW: number,
		INPUT: number,
		OUTPUT: number,
		PWM: number,
		PULL_OFF: number,
		PULL_DOWN: number,
		PULL_UP: number,
		PAD_GROUP_0_27: number,
		PAD_GROUP_28_45: number,
		PAD_GROUP_46_53: number,
		PAD_SLEW_UNLIMITED: number,
		PAD_HYSTERESIS: number,
		PAD_DRIVE_2mA: number,
		PAD_DRIVE_4mA: number,
		PAD_DRIVE_6mA: number,
		PAD_DRIVE_8mA: number,
		PAD_DRIVE_10mA: number,
		PAD_DRIVE_12mA: number,
		PAD_DRIVE_14mA: number,
		PAD_DRIVE_16mA: number,
		POLL_LOW: number,
		POLL_HIGH: number,
		POLL_BOTH: number
	}

			declare module.exports: Rpio


}

declare module 'npm$namespace$RPIO' {
		declare interface Options {
		gpiomem?: boolean,
		mapping?: "gpio" | "physical"
	}

	declare interface CallbackFunction {
		(pin: number): void
	}

			
}