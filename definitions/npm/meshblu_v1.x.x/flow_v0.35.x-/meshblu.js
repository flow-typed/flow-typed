

declare module 'meshblu' {
		declare interface MeshbluStatic {
		createConnection(opt: Meshblu.ConnectionOptions): Meshblu.Connection
	}

			declare module.exports: MeshbluStatic


}

declare module 'npm$namespace$Meshblu' {
		declare interface Connection {
		identify(): Connection,
		sign(data: any): string,
		verify(message: any, signature: any): any,
		encryptMessage(
		uuid: string, message: any, options: Meshblu.ConnectionOptions, fn: (result: any) => void
	): Connection,
		message(payload: MessagePayload, fn: (result: any) => void): Connection,
		update(data: UpdateData, fn: (result: UpdateSuccess) => void): Connection,
		register(data: RegisterData, fn: (result: RegisterResponse) => void): Connection,
		unregister(data: Device, fn: (result: Device) => void): Connection,
		whoami(data: any, fn: (result: DeviceResponse) => void): Connection,
		device(data: Device, fn: (result: DeviceResponse) => void): Connection,
		devices(data: Color, fn: (result: DeviceResponse[]) => void): Connection,
		subscribe(data: SubscribeData, fn: (result: any) => void): Connection,
		unsubscribe(data: UnsubscribeData, fn: (result: any) => void): Connection,
		data(data: DataInput, fn: (result: any) => void): Connection,
		getdata(data: GetDataInput, fn: (result: any) => void): Connection,
		generateAndStoreToken(data: Device, fn: (result: ConnectionOptions) => void): void,
		revokeToken(data: ConnectionOptions, fn: (result: Device) => void): void,
		getPublicKey(uuid: string, fn: (err: Error, publicKey: any) => void): void,
		send(text: string): Connection,
		bufferedSocketEmit(): void,
		parseUrl(serverUrl: string, port: string): string,
		generateKeyPair(): KeyPair,
		setPrivateKey(privateKey: string): void,
		setup(): Connection,
		connect(): void,
		reconnect(): void,
		claimdevice(data: Device, fn: (result: Device) => void): Connection,
		mydevices(data: any, fn: (result: any) => void): Connection,
		status(data: any): Connection,
		authenticate(data: any, fn: (result: any) => void): Connection,
		events(data: any, fn: (result: any) => void): Connection,
		localdevices(fn: (result: any) => void): Connection,
		unclaimeddevices(data: any, fn: (result: any) => void): Connection,
		textBroadcast(data: any): Connection,
		directText(data: any): Connection,
		subscribeText(data: any, fn: (result: any) => void): Connection,
		unsubscribeText(data: any, fn: (result: any) => void): Connection,
		close(fn: (result: any) => void): Connection,
		resetToken(data: any, fn: (result: any) => void): void
	}

	declare interface ConnectionOptions {
		uuid: string,
		token: string
	}

	declare interface KeyPair {
		privateKey: string,
		publicKey: string
	}

	declare interface MessagePayload {
		devices: string[],
		topic: string,
		payload: any,
		qos?: number
	}

	declare interface UpdateData {
		uuid: string,
		color: string
	}

	declare interface UpdateSuccess {
		uuid: string,
		token: string,
		status: string
	}

	declare interface RegisterData {
		type: string
	}

	declare interface RegisterResponse {
		uuid: string,
		token: string,
		type: string
	}

	declare interface Device {
		uuid: string
	}

	declare interface DeviceResponse {
		uuid: string,
		online: boolean,
		color: string
	}

	declare interface Color {
		color: string
	}

	declare interface SubscribeData {
		uuid: string,
		types?: string[],
		topics?: string[]
	}

	declare interface UnsubscribeData {
		uuid: string,
		types?: string[]
	}

	declare interface DataInput {
		uuid: string,
		online: boolean,
		x: number,
		y: number
	}

	declare interface GetDataInput {
		uuid: string,
		start: string,
		finish: string,
		limit: number
	}

	declare interface IdentifySuccess {
		uuid: string,
		token: string,
		status: string
	}

			
}