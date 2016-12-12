

declare module 'ssh2-sftp-client' {
					declare module.exports: Client


}

declare module 'sftp' {
		declare interface FileInfo {
		type: string,
		name: string,
		size: number,
		modifyTime: number,
		accessTime: number,
		rights: {
		user: string,
		group: string,
		other: string
	},
		owner: number,
		group: number
	}

	declare interface Client {
		new (): Client,
		connect(options: ssh2.ConnectConfig): Promise<void>,
		list(remoteFilePath: string): Promise<Array<FileInfo>>,
		get(
		remoteFilePath: string, useCompression?: boolean
	): Promise<NodeJS.ReadableStream>,
		put(
		localFilePath: string, remoteFilePath: string, useCompression?: boolean
	): Promise<void>,
		put(
		buffer: Buffer, remoteFilePath: string, useCompression?: boolean
	): Promise<void>,
		put(
		stream: NodeJS.ReadableStream, remoteFilePath: string, useCompression?: boolean
	): Promise<void>,
		mkdir(remoteFilePath: string, recursive?: boolean): Promise<void>,
		delete(remoteFilePath: string): Promise<void>,
		remove(remoteSourcePath: string, remoteDestPath: string): Promise<void>,
		end(): Promise<void>
	}

			
}